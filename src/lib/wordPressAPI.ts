import { type PaginatedResponse, type QueryResult, type FlattenedPage } from "./wordPressAPI.types";

import dotenv from "dotenv";

dotenv.config();

const WP_API_URL = process.env.WPGRAPHQL_ENDPOINT;

export const fetchWordPressAPI = async (query: string, variables: Record<string, unknown> = {}, retries = 3) => {
	if (!WP_API_URL) {
		throw new Error("WPGRAPHQL_ENDPOINT is not set in the environment variables");
	}

	const headers = {
		"Content-Type": "application/json",
	};

	for (let attempt = 0; attempt < retries; attempt++) {
		try {
			const res = await fetch(WP_API_URL, {
				method: "POST",
				headers,
				body: JSON.stringify({ query, variables }),
			});

			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`);
			}

			const contentType = res.headers.get("content-type");
			if (!contentType || !contentType.includes("application/json")) {
				throw new Error("Unexpected content type: " + contentType);
			}

			const json = await res.json();

			if (json.errors) {
				throw new Error("GraphQL errors: " + JSON.stringify(json.errors));
			}

			return json.data;
		} catch (error) {
			console.error(`Attempt ${attempt + 1} failed:`, error);
			if (attempt === retries - 1) {
				throw error;
			}
			// Wait for a short time before retrying
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	}
};

const paginatedQuery = async <T, U = T>(
	queryGenerator: (cursor: string | null) => string,
	dataTransformer: (node: T) => U,
	limit: number = Infinity,
	batchSize: number = 100
): Promise<U[]> => {
	let allItems: U[] = [];
	let cursor: string | null = null;
	let hasMore = true;

	const fetchBatch = async (): Promise<PaginatedResponse<T> | null> => {
		const query = queryGenerator(cursor);
		const data = await fetchWordPressAPI<QueryResult<T>>(query, { cursor });
		const queryKey = Object.keys(data)[0];
		return data[queryKey] || null;
	};

	while (hasMore && allItems.length < limit) {
		try {
			const response = await fetchBatch();
			if (!response) break;

			const newItems = response.edges.map((edge) => dataTransformer(edge.node));
			allItems = [...allItems, ...newItems];
			cursor = response.pageInfo.endCursor;
			hasMore = response.pageInfo.hasNextPage;

			console.log(`Fetched ${newItems.length} items, total: ${allItems.length}, hasNextPage: ${hasMore}`);

			if (allItems.length >= limit) {
				console.log(`Limit of ${limit} reached or exceeded.`);
				break;
			}
		} catch (error) {
			console.error("Failed to fetch items:", error);
			break;
		}
	}

	console.log(`Fetched a total of ${allItems.length} items.`);

	// Truncate the array if it exceeds the limit
	if (allItems.length > limit) {
		allItems = allItems.slice(0, limit);
	}

	return allItems;
};

export const getAllPages = async (limit: number = Infinity): Promise<FlattenedPage[]> => {
	const pageQuery = (cursor: string | null) => `
	  query GetAllPages($cursor: String) {
		pages(first: 100, after: $cursor) {
		  edges {
			node {
			  id
			  slug
			  title
			  content(format: RENDERED)
			  seo {
				description
				title
				openGraph {
				  image {
					url
				  }
				}
			  }
			}
			cursor
		  }
		  pageInfo {
			hasNextPage
			endCursor
		  }
		}
	  }
	`;

	const pageTransformer = (node: any): FlattenedPage => {
		try {
			return {
				id: node.id || "",
				slug: node.slug || "",
				title: node.title || "",
				content: node.content || "",
				seo: {
					description: node.seo?.description || "",
					title: node.seo?.title || "",
					openGraph: {
						image: {
							url: node.seo?.openGraph?.image?.url || "",
						},
					},
				},
			};
		} catch (error) {
			console.error("Error transforming page node:", error);
			console.error("Problematic node:", JSON.stringify(node, null, 2));
			throw new Error(`Failed to transform page node: ${error.message}`);
		}
	};

	try {
		const pages = await paginatedQuery<any, FlattenedPage>(pageQuery, pageTransformer, limit);
		console.log(`Successfully fetched ${pages.length} pages`);
		return pages;
	} catch (error) {
		console.error("Error in getAllPages:", error);
		if (error.response) {
			console.error("Response data:", error.response.data);
			console.error("Response status:", error.response.status);
			console.error("Response headers:", error.response.headers);
		} else if (error.request) {
			console.error("No response received. Request:", error.request);
		} else {
			console.error("Error message:", error.message);
		}
		console.error("Error config:", error.config);
		throw new Error(`Failed to fetch pages: ${error.message}`);
	}
};

export const getPageBySlug = async (slug) => {
	const data = await fetchWordPressAPI(`
    {
      page(id: "${slug}", idType: URI) {
        id
        slug
        title
        content(format: RENDERED)
        seo {
          description
          title
          openGraph {
            image {
              url
            }
          }
        }
      }
    }
    `);
	return data?.page;
};

export const getAllPosts = async () => {
	const data = await fetchWordPressAPI(`
    {
        posts {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

	return data?.posts;
};

export const getPostBySlug = async (slug) => {
	const data = await fetchWordPressAPI(`
    {
        post(id: "${slug}", idType: SLUG) {
          content(format: RENDERED)
          date
          slug
          title
        }
      }
    `);

	return data?.post;
};

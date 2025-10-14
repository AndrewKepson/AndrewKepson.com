import {
	type PaginatedResponse,
	type QueryResult,
	type FlattenedPage,
	type FlattenedPost,
	type PostInCategory,
	type Category,
} from "./wordPressAPI.types";

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
			  schemaMarkup {
          		schemaMarkup
}
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
				schemaMarkup: node.schemaMarkup?.schemaMarkup || "",
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

export const getAllPosts = async (limit: number = Infinity): Promise<FlattenedPost[]> => {
	const postQuery = (cursor: string | null) => `
	  query GetAllPosts($cursor: String) {
		posts(first: 100, after: $cursor) {
		  edges {
			node {
			  id
			  slug
			  uri
			  title
			  featuredImage {
				node {
				  mediaItemUrl
				  altText
				}
			  }
			  date
			  excerpt
			  content(format: RENDERED)
			  seo {
				title
				description
				canonicalUrl
				robots
				openGraph {
					image {
						url
					}
				}
			  }
			  tags {
				edges {
				  node {
					name
				  }
				}
			  }
			  categories {
				edges {
				  node {
					name
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

	const postTransformer = (node: any): FlattenedPost => {
		try {
			return {
				id: node.id || "",
				slug: node.slug || "",
				uri: node.uri || "",
				title: node.title || "",
				featuredImage: {
					url: node.featuredImage?.node?.mediaItemUrl || "",
					altText: node.featuredImage?.node?.altText || "",
				},
				date: node.date || "",
				excerpt: node.excerpt || "",
				content: node.content || "",
				seo: {
					title: node.seo?.title || "",
					description: node.seo?.description || "",
					canonicalUrl: node.seo?.canonicalUrl || "",
					robots: node.seo?.robots || "",
					ogImage: node.seo?.openGraph?.image?.url || "",
				},
				tags: node.tags?.edges.map((edge: any) => edge.node.name) || [],
				category: node.categories?.edges[0]?.node.name || undefined,
			};
		} catch (error) {
			console.error("Error transforming post node:", error);
			console.error("Problematic node:", JSON.stringify(node, null, 2));
			throw new Error(`Failed to transform post node: ${error.message}`);
		}
	};

	try {
		const posts = await paginatedQuery<any, FlattenedPost>(postQuery, postTransformer, limit);
		console.log(`Successfully fetched ${posts.length} posts`);
		return posts;
	} catch (error) {
		console.error("Error in getAllPosts:", error);
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
		throw new Error(`Failed to fetch posts: ${error.message}`);
	}
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

export const getAllCategories = async (limit: number = Infinity): Promise<Category[]> => {
	const categoryQuery = (cursor: string | null) => `
	  query GetAllCategories($cursor: String) {
		categories(first: 100, after: $cursor) {
		  edges {
			node {
			  id
			  uri
			  name
			  posts {
				nodes {
				  id
				  title
				  uri
				  featuredImage {
					node {
					  altText
					  mediaItemUrl
					}
				  }
				  excerpt
				  author {
					node {
					  name
					}
				  }
				  categories {
					nodes {
					  name
					}
				  }
				  tags {
					nodes {
					  name
					}
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

	const transformPost = (post: any): PostInCategory => ({
		id: post.id,
		title: post.title,
		uri: post.uri,
		featuredImage: post.featuredImage?.node
			? {
					altText: post.featuredImage.node.altText,
					url: post.featuredImage.node.mediaItemUrl,
				}
			: undefined,
		excerpt: post.excerpt,
		author: post.author?.node?.name || undefined,
		categories: post.categories?.nodes.map((cat: any) => cat.name) || undefined,
		tags: post.tags?.nodes.map((tag: any) => tag.name) || undefined,
	});

	const categoryTransformer = (node: any): Category => {
		try {
			return {
				id: node.id || "",
				uri: node.uri || "",
				name: node.name || "",
				posts: node.posts?.nodes.map(transformPost) || [],
			};
		} catch (error) {
			console.error("Error transforming category node:", error);
			console.error("Problematic node:", JSON.stringify(node, null, 2));
			throw new Error(`Failed to transform category node: ${error.message}`);
		}
	};

	try {
		const categories = await paginatedQuery<any, Category>(categoryQuery, categoryTransformer, limit);
		console.log(`Successfully fetched ${categories.length} categories`);
		return categories;
	} catch (error) {
		console.error("Error in getAllCategories:", error);
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
		throw new Error(`Failed to fetch categories: ${error.message}`);
	}
};

export const getMediaItem = async (
	slug: string,
	idType: "SLUG" | "URI" | "DATABASE_ID" = "SLUG"
): Promise<{ src: string; alt: string; width: number; height: number }> => {
	const data: {
		mediaItem: {
			id: string;
			mediaItemUrl: string;
			altText: string;
			mediaDetails: { width: number; height: number };
		};
	} = await fetchWordPressAPI(`
    {
      mediaItem(id: "${slug}", idType: ${idType}) {
        id
        mediaItemUrl
		altText
		mediaDetails {
			width
			height
    	}
      }
    }
  `);

	return {
		src: data?.mediaItem?.mediaItemUrl,
		alt: data?.mediaItem?.altText,
		width: data?.mediaItem?.mediaDetails?.width,
		height: data?.mediaItem?.mediaDetails?.height,
	};
};

import * as cheerio from "cheerio";
import type { BlogPost, PaginationLinks, PaginationState } from "@lib/types";

// * Utility Functions
export const chooseCategoryColor = (category) => {
	let color;

	switch (category) {
		case "Headless Wordpress":
			color = "bg-purple-200 text-purple-600";
			break;
		case "Blockchain":
			color = "bg-gray-200 text-gray-600";
			break;
		case "Digital Marketing":
			color = "bg-emerald-200 text-emerald-600";
			break;
		case "SEO":
			color = "bg-red-200 text-red-600";
			break;
		case "Privacy First Marketing":
			color = "bg-orange-200 text-orange-700";
			break;
		case "Automation":
			color = "bg-blue-200 text-blue-600";
			break;
		default:
			color = "bg-purple-200 text-purple-600";
	}

	return color;
};

export const chooseTagColor = (tag) => {
	let color;

	switch (tag) {
		case "Web Development":
			color = "bg-red-300";
			break;
		case "React":
			color = "bg-sky-300";
			break;
		case "Gatsby":
			color = "bg-purple-300";
			break;
		case "Headless WordPress":
			color = "bg-blue-300";
			break;
		case "Headless CMS":
			color = "bg-emerald-300";
			break;
		case "Jamstack":
			color = "bg-pink-500";
			break;
		case "GraphQL":
			color = "bg-gray-300";
			break;
		case "SEO":
			color = "bg-orange-300";
			break;
		case "Digital Marketing":
			color = "bg-yellow-300";
			break;
		case "Blockchain":
			color = "bg-gray-300";
			break;
		case "Bitcoin":
			color = "bg-orange-300";
			break;
		case "NFTs":
			color = "bg-green-300";
			break;
		case "Automation":
			color = "bg-blue-400";
			break;
		case "Data Management":
			color = "bg-orange-300";
			break;
		case "Forms":
			color = "bg-teal-300";
			break;
		case "Formstack":
			color = "bg-green-300";
			break;
		default:
			color = "bg-purple-300";
	}

	return color;
};

export const getHeadingsFromMarkdown = (
	html: string
): { heading: string; key: number; classes: string; slug: string }[] => {
	const $ = cheerio.load(html);

	const headings = $("h2, h3")
		.map((index, element) => {
			const $el = $(element);
			const isH2 = $el.is("h2");
			const classes = isH2
				? "text-md my-1 cursor-pointer font-display font-normal text-ink-500 md:text-lg hover:text-secondary-400 theme-transition"
				: "text-base my-1 cursor-pointer font-body font-light text-ink-400 md:text-md m-2 hover:text-secondary-400 theme-transition";

			return {
				heading: $el.text(),
				key: index,
				classes,
				slug: $el.attr("id"),
			};
		})
		.get();

	return headings;
};

export const formatDate = (dateString: string, format: "readable" | "ISO" = "readable"): string => {
	const dateObj = new Date(dateString);

	if (format === "readable") {
		// Format as "Month Day, Year"
		return dateObj.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} else if (format === "ISO") {
		// Format as ISO 8601
		return dateObj.toISOString();
	} else {
		throw new Error("Invalid format. Use 'readable' or 'ISO'.");
	}
};

export const stripSchemaMarkup = (schemaMarkup: string): string => {
	const scriptContentRegex = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i;

	const match = schemaMarkup.match(scriptContentRegex);

	if (match && match[1]) {
		const jsonString = match[1].trim();

		try {
			const jsonObject = JSON.parse(jsonString);
			return JSON.stringify(jsonObject, null, 2);
		} catch (error) {
			console.error("Error parsing JSON:", error);
			return "Invalid JSON content";
		}
	}

	return "No valid JSON-LD script found";
};

// * Pagination Helpers
const normalizePaginationBasePath = (basePath: string): string => {
	if (!basePath) {
		return "";
	}

	const trimmed = basePath.trim();
	const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
	return withLeadingSlash.endsWith("/") ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
};

export const BLOG_PAGINATION_BASE_PATH = "/blog";
export const BLOG_INDEX_POST_COUNT = 6;
export const BLOG_PAGINATION_PAGE_SIZE = 6;
export const getCategoryPaginationBasePath = (categorySlug: string): string =>
	normalizePaginationBasePath(`/blog/category/${categorySlug}`);

export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] =>
	[...posts].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

export const buildPaginationPageUrl = (basePath: string, pageNumber: number): string => {
	const normalizedBase = normalizePaginationBasePath(basePath);

	if (!normalizedBase) {
		return pageNumber <= 1 ? "/" : `/${pageNumber}/`;
	}

	if (pageNumber <= 1) {
		return `${normalizedBase}/`;
	}

	return `${normalizedBase}/${pageNumber}/`;
};

export const getPaginationNavUrls = (
	basePath: string,
	currentPage: number,
	totalPages: number
): PaginationLinks => {
	if (totalPages <= 1) {
		return {};
	}

	return {
		first: buildPaginationPageUrl(basePath, 1),
		prev: currentPage > 1 ? buildPaginationPageUrl(basePath, currentPage - 1) : undefined,
		next: currentPage < totalPages ? buildPaginationPageUrl(basePath, currentPage + 1) : undefined,
		last: totalPages > 1 ? buildPaginationPageUrl(basePath, totalPages) : undefined,
	};
};

export const createPaginationState = (
	basePath: string,
	currentPage: number,
	totalPages: number
): PaginationState => ({
	currentPage,
	lastPage: Math.max(totalPages, 1),
	url: getPaginationNavUrls(basePath, currentPage, totalPages),
});

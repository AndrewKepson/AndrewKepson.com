// General Types
export interface PageInfo {
	hasNextPage: boolean;
	endCursor: string | null;
}

export interface Edge<T> {
	node: T;
	cursor: string;
}

export interface PaginatedResponse<T> {
	edges: Edge<T>[];
	pageInfo: PageInfo;
}

export interface QueryResult<T> {
	[key: string]: PaginatedResponse<T>;
}

// Page Types
export interface FlattenedPage {
	id: string;
	slug: string;
	title: string;
	content: string;
	schemaMarkup: string;
	seo: {
		description: string;
		title: string;
		openGraph: {
			image: {
				url: string;
			};
		};
	};
}

export interface FlattenedPost {
	id: string;
	slug: string;
	uri: string;
	title: string;
	featuredImage: {
		url: string;
		altText: string;
	};
	excerpt: string;
	date: string;
	content: string;
	seo: {
		title: string;
		description: string;
		canonicalUrl: string;
		robots: string;
		ogImage: string;
	};
	tags: string[];
	category?: string;
}

export interface PostInCategory {
	id: string;
	title: string;
	uri: string;
	featuredImage?: {
		altText?: string;
		url?: string;
	};
	excerpt?: string;
	author?: string;
	categories?: string[];
	tags?: string[];
}

export interface Category {
	id: string;
	uri: string;
	name: string;
	posts: PostInCategory[];
}

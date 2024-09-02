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

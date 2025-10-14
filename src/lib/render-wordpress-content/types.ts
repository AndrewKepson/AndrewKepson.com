export type WPNode =
	| { type: "code"; title: string; code: string; caption?: string }
	| { type: "image"; src: string; alt: string; caption?: string }
	| { type: "html"; html: string };

export interface ParsedNode {
	type: string;
	html: string;
	text?: string;
	id?: string;
	image?: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
		loading?: "lazy" | "eager";
		decoding?: "async" | "sync";
		class?: string;
	};
	code?: string;
}

export enum WP_BLOCK_CLASSES {
	IMAGE = "wp-block-image",
	CODE = "wp-block-code",
}

export type WPNode =
	| { type: "code"; title: string; code: string; caption?: string }
	| { type: "image"; src: string; alt: string; caption?: string }
	| { type: "html"; html: string };

import type { ThemeVariant } from "../types";

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
		sizes?: string;
	};
	gallery?: {
		class?: string;
		attributes?: Record<string, string>;
		images: Array<{
			src: string;
			alt: string;
			width?: number;
			height?: number;
			loading?: "lazy" | "eager";
			decoding?: "async" | "sync";
			class?: string;
			sizes?: string;
			wrapperClass?: string;
			wrapperAttributes?: Record<string, string>;
			captionHtml?: string;
			linkHref?: string;
			linkAttributes?: Record<string, string>;
		}>;
	};
	button?: {
		text: string;
		href?: string;
		id?: string;
		variant?: ThemeVariant;
	};
	centeredContent?: {
		id?: string;
		variant?: ThemeVariant;
		content: ParsedNode[];
	};
	blockquote?: {
		id?: string;
		citation?: string;
		content: ParsedNode[];
	};
	codeSnippet?: {
		title?: string;
		code: string;
		caption?: string;
	};
	code?: string;
}

export enum WP_BLOCK_CLASSES {
	IMAGE = "wp-block-image",
	CODE = "wp-block-code",
	GALLERY = "wp-block-gallery",
	BUTTON = "wp-block-andrew-kepson-button",
	CENTERED_CONTENT = "wp-block-andrew-kepson-centered-content",
	CODE_SNIPPET = "wp-block-andrew-kepson-code-snippet",
	BLOCKQUOTE = "wp-block-andrew-kepson-blockquote",
}

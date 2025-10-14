import type { ImageMetadata } from "astro";
import type { CollectionEntry } from "astro:content";

export type ThemeVariant = "primary" | "secondary" | "tertiary" | "quaternary" | "offwhite" | "ink";

export interface HeadingProps {
	id?: string;
	text: string;
	level?: 1 | 2 | 3 | 4;
	class?: string;
	highlight?: {
		text: string;
		class?: string;
	};
}

export interface ParagraphProps {
	id?: string;
	text: string;
	class?: string;
}

export interface ButtonProps {
	id?: string;
	variant?: ThemeVariant;
	text: string;
	href?: string;
	class?: string;
}

export interface ImageProps {
	id?: string;
	src: ImageMetadata;
	alt: string;
	width?: number;
	height?: number;
	class?: string;
	loading?: "eager" | "lazy";
	fetchpriority?: "high" | "low";
	decoding?: "async" | "sync";
	formats?: ("avif" | "webp")[];
}

export interface InputProps {
	id?: string;
	label?: string;
	type?:
		| "text"
		| "email"
		| "password"
		| "number"
		| "tel"
		| "url"
		| "search"
		| "date"
		| "time"
		| "datetime-local"
		| "month"
		| "week";
	placeholder?: string;
	name?: string;
	required?: boolean;
	class?: string;
}

export type DateFormat =
	| "MMMM d, yyyy" // June 6, 2025
	| "MM/dd/yyyy" // 06/24/2025
	| "MMMM do, yyyy" // June 6th, 2025
	| "MMM d, yyyy" // Jun 6, 2025
	| "MM-dd-yyyy" // 06-24-2025
	| "yyyy-MM-dd" // 2025-06-24
	| "MMMM d" // June 6
	| "MM/dd/yy" // 06/24/25
	| "MMM do, yyyy"; // Jun 6th, 2025

export type Page = CollectionEntry<"pages">;

export type BlogPost = CollectionEntry<"posts">;

export type BlogCategory = CollectionEntry<"categories">;

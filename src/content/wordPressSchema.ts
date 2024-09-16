import { z } from "astro:content";

export const pageSchema = z.object({
	id: z.string(),
	slug: z.string(),
	title: z.string(),
	content: z.string().optional(),
	schemaMarkup: z.string().optional(),
	seo: z
		.object({
			description: z.string().optional(),
			title: z.string().optional(),
			openGraph: z
				.object({
					image: z
						.object({
							url: z.string().optional(),
						})
						.optional(),
				})
				.optional(),
		})
		.optional(),
});

export const postSchema = z.object({
	id: z.string(),
	slug: z.string(),
	uri: z.string(),
	title: z.string(),
	featuredImage: z
		.object({
			url: z.string().optional(),
			altText: z.string().optional(),
		})
		.optional(),
	date: z.string(),
	excerpt: z.string().optional(),
	content: z.string().optional(),
	seo: z
		.object({
			title: z.string().optional(),
			description: z.string().optional(),
			canonicalUrl: z.string().optional(),
			robots: z.union([z.string(), z.array(z.string())]).optional(),
			ogImage: z.string().optional(),
		})
		.optional(),
	tags: z.array(z.string()).optional(),
	category: z.string().optional(),
});

const postInCategorySchema = z.object({
	id: z.string(),
	title: z.string(),
	uri: z.string(),
	featuredImage: z
		.object({
			altText: z.string().optional(),
			url: z.string().optional(),
		})
		.optional(),
	excerpt: z.string().optional(),
	author: z.string().optional(),
	categories: z.array(z.string()).optional(),
	tags: z.array(z.string()).optional(),
});

export const categorySchema = z.object({
	id: z.string(),
	uri: z.string(),
	name: z.string(),
	posts: z.array(postInCategorySchema),
});

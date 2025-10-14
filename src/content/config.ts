import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { useWordPressAPI } from "@lib/hooks";
import { pageSchema } from "./wordPressSchema";

export const pagesCollection = defineCollection({
	schema: pageSchema,
	loader: async () => {
		const pages = await useWordPressAPI.getAllPages();
		return pages.map((page) => ({
			id: page.id,
			...page,
		}));
	},
});

export const authorsCollection = defineCollection({
	loader: file("src/content/blog/authors.json"),
	schema: ({ image }) =>
		z.object({
			id: z.string(),
			slug: z.string(),
			name: z.object({
				first: z.string(),
				last: z.string(),
			}),
			title: z.string().optional(),
			email: z.string().optional(),
			website: z.string().optional(),
			social: z
				.object({
					x: z.string().optional(),
					linkedin: z.string().optional(),
					github: z.string().optional(),
				})
				.optional(),
			avatar: z.object({
				src: image(),
				alt: z.string(),
			}),
			bio: z.string(),
		}),
});

export const postsCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md, mdx}", base: "./src/content/blog/posts" }),
	schema: ({ image }) =>
		z.object({
			slug: z.string().regex(/^[a-z0-9-]+$/),
			author: reference("authors"),
			category: reference("categories"),
			tags: z.array(reference("tags")).optional(),
			title: z.string(),
			date: z.coerce.date(),
			seo: z.object({
				title: z.string(),
				description: z.string(),
			}),
			featuredImage: z.object({
				src: image(),
				alt: z.string(),
			}),
			excerpt: z.string(),
		}),
});

export const categoriesCollection = defineCollection({
	loader: file("src/content/blog/categories.json"),
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	pages: pagesCollection,
	posts: postsCollection,
	authors: authorsCollection,
	categories: categoriesCollection,
};

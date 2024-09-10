import { defineCollection } from "astro:content";
import { useWordPressAPI } from "@lib/hooks";
import { pageSchema, postSchema, categorySchema } from "./wordPressSchema";

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

export const postsCollection = defineCollection({
	schema: postSchema,
	loader: async () => {
		const posts = await useWordPressAPI.getAllPosts();
		return posts.map((post) => ({
			id: post.id,
			...post,
		}));
	},
});

export const categoriesCollection = defineCollection({
	schema: categorySchema,
	loader: async () => {
		const categories = await useWordPressAPI.getAllCategories();
		return categories.map((category) => ({
			id: category.id,
			...category,
		}));
	},
});

export const collections = {
	pages: pagesCollection,
	posts: postsCollection,
	categories: categoriesCollection,
};

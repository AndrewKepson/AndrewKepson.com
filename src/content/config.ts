// import { defineCollection } from "astro:content";
// import { useWordPressAPI } from "@lib/hooks";
// import { pageSchema } from "./wordPressSchema";

// export const pagesCollection = defineCollection({
// 	schema: pageSchema,
// 	loader: async () => {
// 		const pages = await useWordPressAPI.getAllPages();
// 		return pages.map((page) => ({
// 			id: page.id,
// 			...page,
// 		}));
// 	},
// });

// export const collections = {
// 	pages: pagesCollection,
// };

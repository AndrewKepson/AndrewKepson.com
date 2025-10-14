import { getCollection } from "astro:content";

export const isProduction = import.meta.env.PROD;

export const siteUrl = import.meta.env.SITE;

export const SOCIAL_LINKS = {
    x: "https://x.com/intent/follow?screen_name=AndrewKepson",
    linkedin: "https://www.linkedin.com/in/andrewkepson/",
    github: "https://github.com/AndrewKepson",
}

const pagesCollection = await getCollection("pages");
export const allWordPressPages = pagesCollection?.map((page) => page?.data);

const postsCollection = await getCollection("posts");
export const allWordPressPosts = postsCollection?.map((post) => post?.data);

const categoriesCollection = await getCollection("categories");
export const allWordPressCategories = categoriesCollection?.map((category) => category?.data);

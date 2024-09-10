import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { type FlattenedPost } from "@lib/wordPressAPI.types";

import { BlogPost } from "./BlogPost";
import { Sidebar } from "./Sidebar";
import NothingHere from "./NothingHere.astro";

type BlogPageContentProps = {
	posts?: FlattenedPost[];
	category?: string;
};

export const BlogPageContent: React.FC<BlogPageContentProps> = ({ posts = [], category = "All Categories" }) => {
	const [displayedPosts, setDisplayedPosts] = useState({
		posts,
		displayedPosts: posts,
	});
	const [searchInput, setSearchInput] = useState("");
	const [currentPath, setCurrentPath] = useState("/blog");

	useEffect(() => {
		const handlePopState = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener("popstate", handlePopState);
		return () => window.removeEventListener("popstate", handlePopState);
	}, []);

	const filterBySearch = (e) => {
		const input = e.target.value;

		setSearchInput(input);

		if (input === "") {
			setDisplayedPosts((prev) => ({ ...prev, displayedPosts: posts }));
		} else {
			const filteredList = posts?.filter(
				(post) =>
					post?.title.toLowerCase().startsWith(input.toLowerCase()) ||
					post?.title.toLowerCase().includes(input.toLowerCase()) ||
					post?.category.toLowerCase().includes(input.toLowerCase())
			);

			setDisplayedPosts((prev) => ({
				...prev,
				displayedPosts: [...filteredList.slice(0, 10)],
			}));
		}
	};

	const filterByCategory = (categoryUri: string) => {
		if (categoryUri === "/blog" || categoryUri === "All Categories") {
			window.location.href = "/blog/";
		} else {
			window.location.href = categoryUri;
		}
	};

	const onClear = (e) => {
		e.preventDefault();

		setDisplayedPosts((prev) => ({
			...prev,
			displayedPosts: [...posts],
		}));

		setSearchInput("");

		window.location.href = "/blog/";
	};

	return (
		<div className="-mx-4 flex flex-wrap justify-center">
			<Sidebar
				posts={posts}
				selectedCategory={category}
				searchedName={null}
				searchInput={searchInput}
				filterBySearch={filterBySearch}
				filterByCategory={filterByCategory}
				onClear={onClear}
			/>
			<div className="w-full p-4 lg:w-7/12 xl:w-8/12">
				<div>
					{displayedPosts.displayedPosts.length > 0 ? (
						displayedPosts.displayedPosts.map((post) => (
							<BlogPost key={post.id} post={post} category={post?.category} />
						))
					) : (
						<div></div>
					)}
					<div className="font-roboto text-center font-semibold">Powered by Headless WordPress</div>
				</div>
			</div>
		</div>
	);
};

BlogPageContent.propTypes = {
	posts: PropTypes.array.isRequired,
	category: PropTypes.string,
};

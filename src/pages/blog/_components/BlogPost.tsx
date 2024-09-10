import React from "react";
import Fade from "react-reveal/Fade";
import { type FlattenedPost } from "@lib/wordPressAPI.types";
import { formatDate } from "@lib/functions";

// Assuming you have a default image imported
import defaultImage from "../../../assets/images/stock/headless-wordpress-blogging-stock.jpg";

type BlogPostProps = {
	post: FlattenedPost;
	category: string;
};

export const BlogPost: React.FC<BlogPostProps> = ({ post, category }) => (
	<Fade bottom>
		<div className="mb-6 w-full">
			<div className="flex h-full flex-wrap overflow-hidden rounded-md bg-white shadow-lg">
				<div className="w-full md:w-5/12 lg:w-full xl:w-5/12">
					<div className="relative h-full">
						<a href={post?.uri} className="block h-full opacity-75 hover:opacity-100">
							<img
								src={post?.featuredImage?.url || defaultImage}
								alt={post.featuredImage?.altText || "Writing before blogs."}
								width="600"
								height="400"
								className="h-full w-full object-cover"
							/>
						</a>
					</div>
				</div>
				<div className="w-full px-8 py-6 md:w-7/12 lg:w-full xl:w-7/12">
					<div className="mb-3">
						<span className={`inline-block rounded-sm bg-opacity-75 py-1 text-xs font-medium uppercase`}>
							{category}
						</span>
					</div>
					<h3 className="font-heading mb-3 font-semibold leading-tight hover:text-purple-400">
						<a href={post?.uri}>{post?.title}</a>
					</h3>
					<p className="font-body mb-3" dangerouslySetInnerHTML={{ __html: post?.excerpt }} />
					<a href={post?.uri} className="text-sm font-bold text-purple-600 hover:text-purple-400">
						Read more
					</a>
					<div className="mt-auto flex w-full items-center justify-end border-t py-3 text-xs text-gray-600">
						<p>{formatDate(post?.date, "readable")}</p>
					</div>
				</div>
			</div>
		</div>
	</Fade>
);

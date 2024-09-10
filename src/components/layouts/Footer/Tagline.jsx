import React from "react";

export const Tagline = () => {
	return (
		<div className="py-4 text-sm">
			<hr className="mx-8 mb-4 border-gray-700" />
			<div className="-mx-4 flex flex-col flex-wrap items-center justify-center">
				<p>&copy; {new Date().getFullYear()} by Andrew Kepson</p>
				<a className="hover:text-purple-500" href="/sitemap-index.xml">
					XML Sitemap
				</a>
				<a className="hover:text-purple-500" href="/html-sitemap/">
					HTML Sitemap
				</a>
			</div>
		</div>
	);
};

import * as cheerio from "cheerio";

// * Utility Functions
export const chooseCategoryColor = (category) => {
	let color;

	switch (category) {
		case "Headless Wordpress":
			color = "bg-purple-200 text-purple-600";
			break;
		case "Blockchain":
			color = "bg-gray-200 text-gray-600";
			break;
		case "Digital Marketing":
			color = "bg-emerald-200 text-emerald-600";
			break;
		case "SEO":
			color = "bg-red-200 text-red-600";
			break;
		case "Privacy First Marketing":
			color = "bg-orange-200 text-orange-700";
			break;
		default:
			color = "bg-purple-200 text-purple-600";
	}

	return color;
};

export const chooseTagColor = (tag) => {
	let color;

	switch (tag) {
		case "Web Development":
			color = "bg-red-300";
			break;
		case "React":
			color = "bg-sky-300";
			break;
		case "Gatsby":
			color = "bg-purple-300";
			break;
		case "Headless WordPress":
			color = "bg-blue-300";
			break;
		case "Headless CMS":
			color = "bg-emerald-300";
			break;
		case "Jamstack":
			color = "bg-pink-500";
			break;
		case "GraphQL":
			color = "bg-gray-300";
			break;
		case "SEO":
			color = "bg-orange-300";
			break;
		case "Digital Marketing":
			color = "bg-yellow-300";
			break;
		case "Blockchain":
			color = "bg-gray-300";
			break;
		case "Bitcoin":
			color = "bg-orange-300";
			break;
		case "NFTs":
			color = "bg-green-300";
			break;
		default:
			color = "bg-purple-300";
	}

	return color;
};

export const getHeadingsFromMarkdown = (html) => {
	// Load the HTML into cheerio
	const $ = cheerio.load(html);

	// Select all h2 and h3 elements
	const headings = $("h2, h3")
		.map((index, element) => {
			const $el = $(element);
			const isH2 = $el.is("h2");
			const classes = isH2
				? "text-md my-1 cursor-pointer font-garamond font-semibold text-gray-700 md:text-lg"
				: "text-md my-1 cursor-pointer font-garamond font-semibold text-gray-600 md:text-md m-2";

			return {
				heading: $el.text(),
				key: index,
				classes,
				slug: $el.attr("id"),
			};
		})
		.get(); // Convert cheerio object to a plain array

	return headings;
};

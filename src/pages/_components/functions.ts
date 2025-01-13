import { parse } from "node-html-parser";

interface HeroProps {
	heading: string;
	content: string;
	button1Label: string;
	button1Link: string;
	button1Color: "button-purple" | "button-amber" | "button-teal";
	button2Label: string;
	button2Link: string;
	button2Color: "button-purple" | "button-amber" | "button-teal";
	image: {
		src: string;
		altText: string;
		width: number;
		height: number;
	};
}

function getButtonColor(buttonElement: any): "button-purple" | "button-amber" | "button-teal" {
	const classNames = buttonElement?.classList?.toString() || "";
	if (classNames.includes("button-purple")) return "button-purple";
	if (classNames.includes("button-amber")) return "button-amber";
	if (classNames.includes("button-teal")) return "button-teal";
	return "button-purple"; // default fallback
}

export function getHeroContent(htmlContent: string): HeroProps {
	// Parse HTML
	const root = parse(htmlContent);

	// Get the hero section
	const heroSection = root.querySelector("#block-home-hero");

	if (!heroSection) {
		throw new Error("Hero section not found in content");
	}

	// Extract heading
	const heading = heroSection.querySelector("h1")?.textContent?.replace(/&#8217;/g, "'") || "";

	// Extract content paragraph
	const content = heroSection.querySelector("p")?.textContent || "";

	// Extract buttons
	const button1 = heroSection.querySelector("#block-hero-button-1");
	const button2 = heroSection.querySelector("#block-hero-button-2");

	// Extract image
	const img = heroSection.querySelector("img");
	const dataSrc = img?.getAttribute("data-src") || "";
	const altText = img?.getAttribute("alt") || "";
	const width = img?.getAttribute("width") || null;
	const height = img?.getAttribute("height") || null;

	return {
		heading,
		content,
		button1Label: button1?.textContent || "",
		button1Link: button1?.getAttribute("href") || "",
		button1Color: getButtonColor(button1),
		button2Label: button2?.textContent || "",
		button2Link: button2?.getAttribute("href") || "",
		button2Color: getButtonColor(button2),
		image: {
			src: dataSrc,
			altText,
			width,
			height,
		},
	};
}

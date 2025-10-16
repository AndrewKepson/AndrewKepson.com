import * as cheerio from "cheerio";

import type { AnyNode, Element as CheerioElement } from "domhandler";
import type { ThemeVariant } from "../types";
import { type ParsedNode, WP_BLOCK_CLASSES } from "./types";

type GalleryImage = NonNullable<ParsedNode["gallery"]>["images"][number];
type NodeWithAttribs = AnyNode & {
	attribs?: Record<string, string | undefined>;
};

function parseDimension(value?: string | null): number | undefined {
	if (!value) {
		return undefined;
	}
	const parsed = Number.parseInt(value, 10);
	return Number.isFinite(parsed) ? parsed : undefined;
}

function parseLoadingAttr(value?: string | null): "lazy" | "eager" | undefined {
	return value === "lazy" || value === "eager" ? value : undefined;
}

function parseDecodingAttr(value?: string | null): "async" | "sync" | undefined {
	return value === "async" || value === "sync" ? value : undefined;
}

function hasAttribs(node?: AnyNode | null): node is NodeWithAttribs {
	if (!node) {
		return false;
	}

	return typeof (node as NodeWithAttribs).attribs === "object";
}

function cloneAttributes(node?: AnyNode | null): Record<string, string> | undefined {
	if (!hasAttribs(node) || !node.attribs) {
		return undefined;
	}

	const entries = Object.entries(node.attribs ?? {}).filter(
		(entry): entry is [string, string] => typeof entry[1] === "string"
	);
	if (entries.length === 0) {
		return undefined;
	}

	return entries.reduce(
		(acc, [key, attrValue]) => {
			acc[key] = attrValue;
			return acc;
		},
		{} as Record<string, string>
	);
}

const THEME_VARIANTS: ThemeVariant[] = ["primary", "secondary", "tertiary", "quaternary", "offwhite", "ink"];

function parseThemeVariant(value?: string | null): ThemeVariant | undefined {
	const normalized = value?.trim().toLowerCase() as ThemeVariant | undefined;
	if (!normalized) {
		return undefined;
	}

	return THEME_VARIANTS.includes(normalized) ? normalized : undefined;
}

function parseVariantFromClass(classAttr?: string | null): ThemeVariant | undefined {
	if (!classAttr?.trim()) {
		return undefined;
	}

	const tokens = classAttr.split(/\s+/);
	for (const token of tokens) {
		const match = token.match(/(?:variant|button)-([a-z0-9-]+)/i);
		if (!match) {
			continue;
		}
		const candidate = match[1].toLowerCase() as ThemeVariant;
		if (THEME_VARIANTS.includes(candidate)) {
			return candidate;
		}
	}

	return undefined;
}

export function processWpButtonBlock($: cheerio.CheerioAPI, el: unknown): ParsedNode {
	const $button = $(el as any);
	const text = $button.text().trim();
	const variant =
		parseThemeVariant($button.attr("data-variant")) ?? parseVariantFromClass($button.attr("class"));

	return {
		type: "button",
		html: $.html(el as any),
		button: {
			text,
			href: $button.attr("href") ?? undefined,
			id: $button.attr("id")?.trim() || undefined,
			variant,
		},
	};
}

export function processWpCodeSnippetBlock($: cheerio.CheerioAPI, el: unknown): ParsedNode | null {
	const $block = $(el as any);
	const $figure = $block.find("figure").first();
	const $scope = $figure.length ? $figure : $block;
	const $code = $scope.find("pre code").first();

	if ($code.length === 0) {
		return null;
	}

	const rawHtml = $code.html() ?? "";
	const codeText = cheerio.load(`<div>${rawHtml}</div>`)("div").text().trim();

	const title = $figure.find("span").first().text().trim() || undefined;
	const caption = $figure.find("figcaption").first().text().trim() || undefined;

	return {
		type: "code-snippet",
		html: $.html(el as any),
		codeSnippet: {
			title,
			code: codeText,
			caption,
		},
	};
}

export function processWpCodeBlock($: cheerio.CheerioAPI, el: unknown): ParsedNode {
	const codeEl = $(el as any)
		.find("code")
		.first();

	// remove highlighting spans and decode entities
	const rawHtml = codeEl.html() ?? "";
	const cleanText = cheerio.load(`<div>${rawHtml}</div>`)("div").text();

	return {
		type: "code",
		html: $.html(el as any),
		code: cleanText.trim(),
	};
}

function parseWpChildren($: cheerio.CheerioAPI, collection: cheerio.Cheerio<any>): ParsedNode[] {
	const nodes: ParsedNode[] = [];

	collection.each((_, child) => {
		if (!child || (child as CheerioElement).type !== "tag") {
			return;
		}

		const parsed = parseWpElement($, child as CheerioElement);
		if (parsed) {
			nodes.push(parsed);
		}
	});

	return nodes;
}

export function processWpCenteredContentBlock($: cheerio.CheerioAPI, el: unknown): ParsedNode | null {
	const $section = $(el as any);
	const containerEl = $section.get(0);
	if (!containerEl) {
		return null;
	}

	const contentWrapper = $section.find(".block-content").first();
	const contentNodes = parseWpChildren($, contentWrapper.length ? contentWrapper.children() : $section.children());
	const variant =
		parseThemeVariant($section.attr("data-variant")) ?? parseVariantFromClass($section.attr("class"));

	return {
		type: "centered-content",
		html: $.html(el as any),
		centeredContent: {
			id: $section.attr("id")?.trim() || undefined,
			variant,
			content: contentNodes,
		},
	};
}

export function processWpGalleryBlock($: cheerio.CheerioAPI, el: unknown): ParsedNode | null {
	const $gallery = $(el as any);
	const containerEl = $gallery.get(0);
	const containerClass = containerEl?.attribs?.class ?? undefined;
	let containerAttributes = cloneAttributes(containerEl);
	if (containerAttributes?.class) {
		delete containerAttributes.class;
	}
	if (containerAttributes && Object.keys(containerAttributes).length === 0) {
		containerAttributes = undefined;
	}

	const images: GalleryImage[] = [];
	const nestedFigures = $gallery.find(`.${WP_BLOCK_CLASSES.IMAGE}`).toArray();

	if (nestedFigures.length > 0) {
		for (const figureEl of nestedFigures) {
			const $figure = $(figureEl);
			const $img = $figure.find("img").first();
			if ($img.length === 0) {
				continue;
			}

			const src = $img.attr("src")?.trim();
			if (!src) {
				continue;
			}

			const linkEl = $img.parent("a").first();
			const captionEl = $figure.find("figcaption").first();
			let wrapperAttributes = cloneAttributes($figure.get(0));
			if (wrapperAttributes?.class) {
				delete wrapperAttributes.class;
			}
			if (wrapperAttributes && Object.keys(wrapperAttributes).length === 0) {
				wrapperAttributes = undefined;
			}
			let linkAttributes = linkEl.length ? cloneAttributes(linkEl.get(0)) : undefined;
			if (linkAttributes?.href) {
				delete linkAttributes.href;
			}
			if (linkAttributes && Object.keys(linkAttributes).length === 0) {
				linkAttributes = undefined;
			}

			images.push({
				src,
				alt: $img.attr("alt") ?? "",
				width: parseDimension($img.attr("width")),
				height: parseDimension($img.attr("height")),
				loading: parseLoadingAttr($img.attr("loading")),
				decoding: parseDecodingAttr($img.attr("decoding")),
				class: $img.attr("class") ?? undefined,
				sizes: $img.attr("sizes") ?? undefined,
				wrapperClass: $figure.attr("class") ?? undefined,
				wrapperAttributes,
				captionHtml: captionEl.length ? captionEl.html()?.trim() || undefined : undefined,
				linkHref: linkEl.length ? (linkEl.attr("href") ?? undefined) : undefined,
				linkAttributes,
			});
		}
	} else {
		$gallery.find("img").each((_, imgEl) => {
			const $img = $(imgEl);
			const src = $img.attr("src")?.trim();
			if (!src) {
				return;
			}

			const $wrapper = $img.closest("figure");
			const captionEl = $wrapper.length
				? $wrapper.find("figcaption").first()
				: $gallery.find("figcaption").first();
			const linkEl = $img.parent("a").first();
			let wrapperAttributes = $wrapper.length ? cloneAttributes($wrapper.get(0)) : undefined;
			if (wrapperAttributes?.class) {
				delete wrapperAttributes.class;
			}
			if (wrapperAttributes && Object.keys(wrapperAttributes).length === 0) {
				wrapperAttributes = undefined;
			}
			let linkAttributes = linkEl.length ? cloneAttributes(linkEl.get(0)) : undefined;
			if (linkAttributes?.href) {
				delete linkAttributes.href;
			}
			if (linkAttributes && Object.keys(linkAttributes).length === 0) {
				linkAttributes = undefined;
			}

			images.push({
				src,
				alt: $img.attr("alt") ?? "",
				width: parseDimension($img.attr("width")),
				height: parseDimension($img.attr("height")),
				loading: parseLoadingAttr($img.attr("loading")),
				decoding: parseDecodingAttr($img.attr("decoding")),
				class: $img.attr("class") ?? undefined,
				sizes: $img.attr("sizes") ?? undefined,
				wrapperClass: $wrapper.length ? ($wrapper.attr("class") ?? undefined) : undefined,
				wrapperAttributes,
				captionHtml: captionEl.length ? captionEl.html()?.trim() || undefined : undefined,
				linkHref: linkEl.length ? (linkEl.attr("href") ?? undefined) : undefined,
				linkAttributes,
			});
		});
	}

	if (images.length === 0) {
		return null;
	}

	return {
		type: "gallery",
		html: $.html(el as any),
		gallery: {
			class: containerClass,
			attributes: containerAttributes,
			images,
		},
	};
}

export function parseHTML(html: string): ParsedNode[] {
	const $ = cheerio.load(html);
	return parseWpChildren($, $("body").children());
}

function parseWpElement($: cheerio.CheerioAPI, el: CheerioElement): ParsedNode | null {
	const $el = $(el as any);
	const tag = el.tagName?.toLowerCase() || "unknown";

	// Centered Content Blocks
	if ($el.hasClass(WP_BLOCK_CLASSES.CENTERED_CONTENT)) {
		const centered = processWpCenteredContentBlock($, el);
		if (centered) {
			return centered;
		}
	}

	// Gallery Blocks
	if ($el.hasClass(WP_BLOCK_CLASSES.GALLERY)) {
		return processWpGalleryBlock($, el);
	}

	// Code Snippet Blocks
	if ($el.hasClass(WP_BLOCK_CLASSES.CODE_SNIPPET)) {
		return processWpCodeSnippetBlock($, el);
	}

	// Button Blocks
	if ($el.hasClass(WP_BLOCK_CLASSES.BUTTON)) {
		return processWpButtonBlock($, el);
	}

	// Heading Blocks
	if (["h1", "h2", "h3", "h4"].includes(tag)) {
		return {
			type: tag,
			text: $el.text().trim(),
			id: $el.attr("id") ?? undefined,
			html: $.html(el as any),
		};
	}

	// Image Blocks
	if ($el.hasClass(WP_BLOCK_CLASSES.IMAGE)) {
		const img = $el.find("img").first();
		if (img.length) {
			return {
				type: "image",
				html: $.html(el as any),
				image: {
					src: img.attr("src") || "",
					alt: img.attr("alt") || "",
					width: Number(img.attr("width")) || undefined,
					height: Number(img.attr("height")) || undefined,
					loading: img.attr("loading") as "lazy" | "eager" | undefined,
					decoding: img.attr("decoding") as "async" | "sync" | undefined,
					class: img.attr("class") ?? undefined,
					sizes: img.attr("sizes") ?? undefined,
				},
			};
		}
	}

	// Default fallback
	return {
		type: tag,
		html: $.html(el as any),
	};
}

export function processSchemaMarkup(schemaMarkup: string): string {
	if (!schemaMarkup?.trim()) {
		return "";
	}

	const $ = cheerio.load(schemaMarkup);
	const scripts: string[] = [];

	$("script[type='application/ld+json']").each((_, scriptEl) => {
		const $script = $(scriptEl);
		const rawJson = $script.html() ?? "";
		let minifiedJson = rawJson.trim();

		if (minifiedJson) {
			try {
				minifiedJson = JSON.stringify(JSON.parse(minifiedJson));
			} catch {
				minifiedJson = minifiedJson.replace(/\s+/g, " ").trim();
			}
		}

		$script.html(minifiedJson);
		scripts.push($.html(scriptEl));
	});

	if (scripts.length === 0) {
		return schemaMarkup
			.replace(/^<p>/i, "")
			.replace(/<\/p>$/i, "")
			.trim();
	}

	return scripts.join("\n");
}

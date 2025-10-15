import * as cheerio from "cheerio";

import type { AnyNode } from "domhandler";
import { type ParsedNode, WP_BLOCK_CLASSES } from "./types";

type GalleryImage = NonNullable<ParsedNode["gallery"]>["images"][number];

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

type NodeWithAttribs = AnyNode & {
	attribs?: Record<string, string | undefined>;
};

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

	const entries = Object.entries(node.attribs ?? {}).filter(([, value]): value is string => typeof value === "string");
	if (entries.length === 0) {
		return undefined;
	}

	return entries.reduce((acc, [key, attrValue]) => {
		acc[key] = attrValue;
		return acc;
	}, {} as Record<string, string>);
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
				linkHref: linkEl.length ? linkEl.attr("href") ?? undefined : undefined,
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
			const captionEl = $wrapper.length ? $wrapper.find("figcaption").first() : $gallery.find("figcaption").first();
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
				wrapperClass: $wrapper.length ? $wrapper.attr("class") ?? undefined : undefined,
				wrapperAttributes,
				captionHtml: captionEl.length ? captionEl.html()?.trim() || undefined : undefined,
				linkHref: linkEl.length ? linkEl.attr("href") ?? undefined : undefined,
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
	const nodes: ParsedNode[] = [];

	$("body")
		.children()
		.each((_, el) => {
			const tag = el.tagName?.toLowerCase() || "unknown";

			// Heading Blocks
			if (["h1", "h2", "h3", "h4"].includes(tag)) {
				nodes.push({
					type: tag,
					text: $(el).text().trim(),
					id: $(el).attr("id"),
					html: $.html(el),
				});
				return;
			}

			// Gallery Blocks
			if ($(el).hasClass(WP_BLOCK_CLASSES.GALLERY)) {
				const galleryNode = processWpGalleryBlock($, el);
				if (galleryNode) {
					nodes.push(galleryNode);
					return;
				}
			}

			// Image Blocks
			if ($(el).hasClass(WP_BLOCK_CLASSES.IMAGE)) {
				const img = $(el).find("img").first();
				if (img.length) {
					nodes.push({
						type: "image",
						html: $.html(el),
						image: {
							src: img.attr("src") || "",
							alt: img.attr("alt") || "",
							width: Number(img.attr("width")) || undefined,
							height: Number(img.attr("height")) || undefined,
							loading: img.attr("loading") as "lazy" | "eager" | undefined,
							decoding: img.attr("decoding") as "async" | "sync" | undefined,
							class: img.attr("class"),
						},
					});
				}
				return;
			}

			// Code blocks
			// if ($(el).hasClass(WP_BLOCK_CLASSES.CODE)) {
			// 	nodes.push(processWpCodeBlock($, el));
			// 	return;
			// }

			// Default fallback
			nodes.push({
				type: tag,
				html: $.html(el),
			});
		});

	return nodes;
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

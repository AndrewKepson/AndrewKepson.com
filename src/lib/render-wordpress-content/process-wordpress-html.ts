import * as cheerio from "cheerio";

import { type ParsedNode, WP_BLOCK_CLASSES } from "./types";

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

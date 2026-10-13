import { writeFile } from "node:fs/promises";

const password = process.env.CMS_PREVIEW_PASSWORD;
if (
	process.env.CMS_VALIDATION !== "1" ||
	process.env.WPGRAPHQL_ENDPOINT !== "https://cms-pilot.andrewkepson.com/graphql" ||
	process.env.HEAD !== "codex/andrew-cms-validation" ||
	!["deploy-preview", "branch-deploy"].includes(process.env.CONTEXT) ||
	!process.env.CMS_VALIDATION_AUTH ||
	!password ||
	/[\s:]/.test(password)
) {
	throw new Error("Protected CMS validation build configuration is required.");
}

if (process.argv[2] === "write") {
	await writeFile(
		"dist/_headers",
		`/*\n  Basic-Auth: andrew-pilot:${password}\n  X-Robots-Tag: noindex, nofollow\n  Cache-Control: no-store\n`,
		{ mode: 0o600 }
	);
} else if (process.argv[2] !== "check") {
	throw new Error("Expected check or write.");
}

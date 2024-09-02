// * Utility Functions
export function sortArrayObjectsByProperty(arr, property) {
	if (!arr || !arr.every((element) => element.hasOwnProperty(property))) {
		throw new Error(`Every element must have the property '${property}'`);
	}

	return arr.sort((a, b) => {
		let propA = a[property];
		let propB = b[property];

		return propA.localeCompare(propB);
	});
}

export function sortEdgesByTitle(edges) {
	if (!edges || !edges.every((edge) => edge.node && edge.node.title)) {
		throw new Error("Each edge must have a node with a title");
	}

	return edges.sort((a, b) => {
		let titleA = a.node.title.toLowerCase();
		let titleB = b.node.title.toLowerCase();
		return titleA.localeCompare(titleB);
	});
}

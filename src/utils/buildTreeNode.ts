import { TreeNode } from "~/types/TreeNode";

/**
 * ディレクトリ -> ファイルの順でソートする簡易的な関数
 */
export function compareNodes(a: TreeNode, b: TreeNode): number {
	if (a.isDirectory === b.isDirectory) {
		return a.label.localeCompare(b.label);
	}
	return a.isDirectory ? -1 : 1;
}

export function buildTreeNode<T>(data: T[], key: keyof T, compareFunc: (a: TreeNode, b: TreeNode) => number = compareNodes): TreeNode[] {
	const treeData: TreeNode[] = [];

	for (const item of data) {
		const path = item[key] as string;
		const segments = path.split("/");
		let currentNode: TreeNode[] = treeData;
		let currentPath = "";
		let currentIndent = 0;

		for (const segment of segments) {
			currentPath += currentPath ? `/${segment}` : segment;

			let existingNode = currentNode.find(node => node.label === segment);

			if (!existingNode) {
				existingNode = {
					label: segment,
					path: currentPath,
					isDirectory: !currentPath.endsWith(path),
					depth: currentIndent,
					children: []
				};

				currentNode.push(existingNode);
				currentNode.sort(compareFunc);
			}

			currentNode = existingNode.children;
			currentIndent++;
		}
	}

	return treeData;
}

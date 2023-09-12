export interface TreeNode {
	label: string;
	path: string;
	isDirectory: boolean;
	depth: number;
	children: TreeNode[];
}

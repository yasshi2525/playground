export interface TreeNode {
	label: string;
	path: string;
	isDirectory: boolean;
	children: TreeNode[];
}

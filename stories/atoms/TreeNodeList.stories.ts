import type { Meta, StoryObj } from "@storybook/vue3";
import TreeNodeList from "~/components/atoms/TreeNodeList.vue";
import { buildTreeNode } from "~/utils/buildTreeNode";

const meta: Meta<typeof TreeNodeList> = {
	title: "atoms / TreeNodeList",
	component: TreeNodeList,
	render: (args) => ({
		components: {
			TreeNodeList,
		},
		setup() {
			return { args };
		},
		template: `
			<TreeNodeList v-bind='args'>
				<template #default="slotProps">
					{{ slotProps.node.label }}
				</template>
			</TreeNodeList>
		`,
	})
};
export default meta;

type Story = StoryObj<typeof meta>;

const paths = [
	{
		path: "aaa/bbb/file.txt"
	},
	{
		path: "aaa/bbb/ccc/file2.txt"
	},
	{
		path: "aaa/vvv/mmm/file3.txt"
	},
	{
		path: "ddd/ccc/file4.txt"
	},
	{
		path: "ddd/ccc/file5.txt"
	}
];

const treeData = buildTreeNode(paths, "path");

export const Basic: Story = {
	args: {
		node: {
			path: "/",
			isDirectory: true,
			label: "root",
			depth: 0,
			children: treeData,
		}
	}
};

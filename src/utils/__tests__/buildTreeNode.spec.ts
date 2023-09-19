import { buildTreeNode } from "../buildTreeNode";

describe("buildTreeNode", () => {
	it("can build tree node", () => {
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
				path: "ddd/aaa/file5.txt"
			},
			{
				path: "ddd/ccc/file6.txt"
			},
			{
				path: "ddd/aaa/file7.txt"
			}
		];
		const tree = buildTreeNode(paths, "path");

		expect(tree).toEqual([
			{
				label: "aaa",
				path: "aaa",
				isDirectory: true,
				children: [
					{
						label: "bbb",
						path: "aaa/bbb",
						isDirectory: true,
						children: [
							{
								label: "ccc",
								path: "aaa/bbb/ccc",
								isDirectory: true,
								children: [{ label: "file2.txt", path: "aaa/bbb/ccc/file2.txt", isDirectory: false, children: [] }]
							},
							{ label: "file.txt", path: "aaa/bbb/file.txt", isDirectory: false, children: [] }
						]
					},
					{
						label: "vvv",
						path: "aaa/vvv",
						isDirectory: true,
						children: [
							{
								label: "mmm",
								path: "aaa/vvv/mmm",
								isDirectory: true,
								children: [{ label: "file3.txt", path: "aaa/vvv/mmm/file3.txt", isDirectory: false, children: [] }]
							}
						]
					}
				]
			},
			{
				label: "ddd",
				path: "ddd",
				isDirectory: true,
				children: [
					{
						label: "aaa",
						path: "ddd/aaa",
						isDirectory: true,
						children: [
							{ label: "file5.txt", path: "ddd/aaa/file5.txt", isDirectory: false, children: [] },
							{ label: "file7.txt", path: "ddd/aaa/file7.txt", isDirectory: false, children: [] }
						]
					},
					{
						label: "ccc",
						path: "ddd/ccc",
						isDirectory: true,
						children: [
							{ label: "file4.txt", path: "ddd/ccc/file4.txt", isDirectory: false, children: [] },
							{ label: "file6.txt", path: "ddd/ccc/file6.txt", isDirectory: false, children: [] }
						]
					}
				]
			}
		]);
	});
});

import type { Meta, StoryObj } from "@storybook/vue3";
import BinaryViewer from "~/components/molecules/BinaryViewer.vue";

const meta: Meta<typeof BinaryViewer> = {
	title: "molecules / BinaryViewer",
	component: BinaryViewer
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "se",
		src: "/default/assets/binary_1KiB"
	}
};

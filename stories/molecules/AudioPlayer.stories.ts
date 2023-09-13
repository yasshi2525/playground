import type { Meta, StoryObj } from "@storybook/vue3";
import AudioPlayer from "~/components/molecules/AudioPlayer.vue";

const meta: Meta<typeof AudioPlayer> = {
	title: "molecules / AudioPlayer",
	component: AudioPlayer
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "se",
		src: "/default/audio/se",
		extensions: [".ogg", ".m4a", ".aac"]
	}
};

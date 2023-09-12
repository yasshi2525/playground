import type { Meta, StoryObj } from "@storybook/vue3";
import MediaQuerySelector from "~/components/molecules/MediaQuerySelector.vue";

const meta: Meta<typeof MediaQuerySelector> = {
	title: "molecules / MediaQuerySelector",
	component: MediaQuerySelector,
	render: (args) => ({
		components: {
			MediaQuerySelector,
		},
		setup() {
			return { args };
		},
		template: `
			<MediaQuerySelector v-bind='args'>
				<template #pc>
					This is PC
				</template>
				<template #sp>
					This is SP
				</template>
			</MediaQuerySelector>
		`,
	})
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		breakpoint: 960
	}
};

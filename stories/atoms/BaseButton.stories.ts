import type { Meta, StoryObj } from "@storybook/vue3";
import BaseButton from "~/components/atoms/BaseButton.vue";

const meta: Meta<typeof BaseButton> = {
	title: "atoms / BaseButton",
	component: BaseButton,
	render: (args) => ({
		components: {
			BaseButton,
		},
		setup() {
			return { args };
		},
		template: "<BaseButton v-bind='args'>Click Me</BaseButton>",
	})
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	argTypes: { onClick: { action: 'clicked' } },
};

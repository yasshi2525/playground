<template>
	<button class="button-container" @click="props.onClick"><slot /></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		onClick: {
			type: Function as PropType<() => void>,
			required: true
		}
	},
	setup(props) {
		return {
			props
		};
	}
});
</script>

<style scoped>
button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5em 1em;
	text-decoration: none;
	background-color: #627295;
	color: #fff;
	border-width: 0;
	cursor: pointer;
}

button:hover {
	background-color: #668ad8;
}
</style>

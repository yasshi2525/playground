<template>
	<button class="button-container" @click="onClick"><slot /></button>
</template>

<script setup lang="ts">
interface Props {
	onClick: () => void;
}

defineProps<Props>();
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

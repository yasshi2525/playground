<template>
	<div>Cannot display binary file</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	src: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
div {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	color: rgba(1, 1, 1, 0.7);
}
</style>

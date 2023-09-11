<template>
	<div class="image-viewer-container">
		<img :src="src" :title="title" :width="width" :height="height" class="transparent" />
	</div>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	src: string;
	width: number;
	height: number;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.image-viewer-container {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.image-viewer-container > img {
	box-shadow: 0px 0px 10px gray;
	max-width: 80%;
	max-height: 80%;
	width: auto;
	height: auto;
}
</style>

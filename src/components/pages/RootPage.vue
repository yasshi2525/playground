<template>
	<router-view />
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	width: 100%;
	height: 100%;
}

body {
	width: 100%;
	height: 100%;
}

.transparent {
	background-position: 0px 0px, 10px 10px;
	background-size: 20px 20px;
	background-image: -webkit-linear-gradient(45deg, #ededed 25%, transparent 25%, transparent 75%, #ededed 75%, #ededed 100%),
		-webkit-linear-gradient(45deg, #ededed 25%, white 25%, white 75%, #ededed 75%, #ededed 100%);
	background-image: linear-gradient(45deg, #ededed 25%, transparent 25%, transparent 75%, #ededed 75%, #ededed 100%),
		linear-gradient(45deg, #ededed 25%, white 25%, white 75%, #ededed 75%, #ededed 100%);
}

.pointer {
	cursor: pointer;
}
</style>

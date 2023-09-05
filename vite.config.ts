import path from "path";
import createVuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import monacoEditorPlugin from "vite-plugin-monaco-editor";

export default defineConfig({
	base: "", // NOTE: 成果物を相対パスとして出力
	plugins: [
		monacoEditorPlugin({}),
		createVuePlugin()
	],
	resolve: {
		alias: {
			vue: "vue/dist/vue.esm-bundler.js",
			path: "path-browserify",
			"~": path.resolve(__dirname, "./src"),
		},
	},
	css: {
		modules: {
			scopeBehaviour: "local",
		},
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~/assets" as *;`,
			},
		},
	},
	define: {
		"process.env": {},
		__VUE_PROD_DEVTOOLS__: "false",
	},
});

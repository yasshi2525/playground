<template>
	<div class="akashic-editor-container">
		<div class="container-top">
			<div class="container-tabs hidden-scrollbar">
				<ul>
					<li
						v-for="(asset, i) in gameConfs.pseudoFiles"
						:key="i"
						class="ctrl-tab"
						:class="{
							active: state.currentPseudoFile && state.currentPseudoFile.uri === gameConfs.pseudoFiles[i].uri,
							hidden: gameConfs.pseudoFiles[i].hidden
						}"
						:title="gameConfs.pseudoFiles[i].virtualPath"
						@click="changeCurrentPseudoFile(gameConfs.pseudoFiles[i].uri)"
					>
						<span v-if="gameConfs.pseudoFiles[i].assetType === 'game.json'"
							><i class="material-icons inline" style="color: #eb8b35">settings</i></span
						>
						<span v-else-if="gameConfs.pseudoFiles[i].editorType === 'text'"
							><i class="material-icons inline" style="color: #090c10">note</i></span
						>
						<span v-else-if="gameConfs.pseudoFiles[i].editorType === 'image'"
							><i class="material-icons inline" style="color: #e50185">image</i></span
						>
						<span v-else-if="gameConfs.pseudoFiles[i].editorType === 'audio'"
							><i class="material-icons inline" style="color: #084f93">music_note</i></span
						>
						<span v-else>❓</span>
						{{ asset.filename }}
					</li>
				</ul>
			</div>
			<div class="editor">
				<div v-show="state.currentPseudoFile && state.currentPseudoFile.editorType === 'text'">
					<CodeEditor ref="CodeEditorRef" :handleValueChanged="state.handleEditorValueChanged" />
				</div>
				<div v-if="state.currentPseudoFile && state.currentPseudoFile.editorType === 'image'">
					<ImageViewer
						:width="state.currentPseudoFile.width"
						:height="state.currentPseudoFile.height"
						:src="state.currentPseudoFile.uri"
						:title="state.currentPseudoFile.name"
					/>
				</div>
				<div v-else-if="state.currentPseudoFile && state.currentPseudoFile.editorType === 'audio'">
					<AudioPlayer :src="state.currentPseudoFile.uri" :title="state.currentPseudoFile.name" />
				</div>
			</div>
		</div>
		<div class="container-bottom">
			<ConsoleViewer :values="gameContext.consoleValues" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, inject, reactive, ref, watch, provide } from "vue";
import AudioPlayer from "~/components/molecules/AudioPlayer.vue";
import ConsoleViewer from "~/components/molecules/ConsoleViewer.vue";
import ImageViewer from "~/components/molecules/ImageViewer.vue";
import CodeEditor from "~/components/organisms/CodeEditor.vue";
import { useCodeEditor, useCodeEditorKey } from "~/composables/useCodeEditor";
import { useExtraLibsResolver } from "~/composables/useExtraLibsResolver";
import { useGameContextKey, UseGameContextStore } from "~/composables/useGameContext";
import { useGameJSONResolverKey, UseGameJSONResolverStore } from "~/composables/useGameJSONResolver";
import { PseudoFile } from "~/types/PseudoFile";

interface State {
	currentPseudoFile: PseudoFile | null;
	handleEditorValueChanged: ((value: string) => void) | null;
}

export default defineComponent({
	components: {
		ImageViewer,
		AudioPlayer,
		ConsoleViewer,
		CodeEditor
	},
	setup(props) {
		const editorRef = ref<HTMLDivElement>();
		const state = reactive<State>({
			currentPseudoFile: null,
			handleEditorValueChanged: null
		});

		const editorState = useCodeEditor();
		const gameContext = inject(useGameContextKey) as UseGameContextStore;
		const gameConfs = inject(useGameJSONResolverKey) as UseGameJSONResolverStore;

		provide(useCodeEditorKey, editorState);

		gameContext.handleErrors(window);

		watch(
			() => gameConfs.dependencies,
			async dependencies => {
				if (!dependencies.length) return;
				const extLibsResolver = useExtraLibsResolver();
				const uris = extLibsResolver.getExtraLibUris(gameContext.currentVersion, dependencies);
				extLibsResolver.fetchExtraLibsFromUris(uris);
				watch(
					() => extLibsResolver.extraLibs,
					extraLibs => {
						editorState.setExtraLibs(extraLibs);
					},
					{
						deep: true
					}
				);
			},
			{
				deep: true
			}
		);

		watch(
			() => gameConfs.pseudoFiles,
			pseudoFiles => {
				changeCurrentPseudoFile(gameConfs.entryAssetUri);
			},
			{
				deep: true
			}
		);

		const changeCurrentPseudoFile = (uri: string | null) => {
			const file = gameConfs.pseudoFiles.find(f => f.uri === uri);
			if (!file) return;
			if (file.editorType === "text") {
				editorState.setValue(file.uri, file.value, file.language);
				state.handleEditorValueChanged = (value: string) => {
					file.value = value;
				};
			} else {
				state.handleEditorValueChanged = null;
			}
			state.currentPseudoFile = file;
		};

		return {
			state,
			props,
			gameConfs,
			gameContext,
			editorRef,
			changeCurrentPseudoFile
		};
	}
});
</script>

<style scoped>
@media screen and (min-width: 960px) {
	.akashic-editor-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.container-top {
		width: 100%;
		height: calc(100% - 50px);
		display: flex;
		flex-direction: row;
	}

	.container-top > div.editor,
	.container-top > div.editor > div {
		width: 100%;
		height: 100%;
	}

	.container-tabs {
		min-width: 180px;
		max-width: 240px;
		border-right: 2px solid #ddd;
		overflow-y: scroll;
	}

	.container-tabs > ul {
		list-style-type: none;
		margin: 5px;
		padding: 5px;
	}

	.container-tabs > ul > li.ctrl-tab:hover {
		background-color: #ddd;
		border-color: #ddd;
	}

	.container-tabs > ul > li {
		cursor: pointer;
		padding: 5px;
		border-left-width: 5px;
		border-left-style: solid;
		border-left-color: #fff;
		font-size: 14px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.container-tabs > ul > li.ctrl-tab.active {
		border-left-color: #666;
		background-color: #eee;
	}

	.container-tabs > ul > li.ctrl-tab.hidden {
		color: #aaa;
		display: none;
	}

	.container-bottom {
		height: 50px;
		overflow-y: scroll;
	}
}

@media screen and (max-width: 959px) {
	.akashic-editor-container {
		width: 100%;
		height: calc(100% - 50px);
	}

	.container-top > div.editor {
		width: 100%;
		height: calc(100% - 50px);
	}

	.container-top > div.editor > div {
		width: 100%;
		height: 100%;
	}

	.container-top {
		height: 100%;
		overflow: hidden;
	}

	.container-tabs {
		width: 100%;
		border-top: 2px solid #ddd;
		overflow-x: scroll;
	}

	.container-tabs > ul {
		list-style-type: none;
		margin: 5px;
		padding: 5px 5px 0 5px;
		display: flex;
		flex-direction: row;
	}

	.container-tabs > ul > li {
		cursor: pointer;
		padding: 8px;
		margin: 0px 3px;
		border-color: #666;
		border-style: solid;
		border-width: 1px 1px 0 1px;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		font-size: 14px;
		white-space: nowrap;
		background-color: #eee;
	}

	.container-tabs > ul > li.ctrl-tab:hover {
		background-color: #ddd;
	}

	.container-tabs > ul > li.ctrl-tab.active {
		background-color: #fff;
	}

	.container-tabs > ul > li.ctrl-tab.hidden {
		color: #aaa;
		display: none;
	}

	.container-bottom {
		height: 50px;
		overflow-y: scroll;
	}
}
</style>

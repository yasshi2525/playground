export type PseudoFile =
	| PseudoGameJSONFile
	| PseudoScriptAssetFile
	| PseudoTextAssetFile
	| PseudoImageAssetFile
	| PseudoVectorImageAssetFile
	| PseudoAudioAssetFile
	| PseudoBinaryAssetFile
	| PseudoUnknownAssetFile;

export interface PseudoGameJSONFile {
	name: "game.json";
	filename: "game.json";
	assetType: "game.json";
	editorType: "text";
	uri: string;
	language: "json";
	value: string;
	hidden?: boolean;
}

export interface PseudoScriptAssetFile extends PseudoAssetFile {
	assetType: "script";
	editorType: "text";
	language: "javascript" | "typescript";
	value: string;
}

export interface PseudoTextAssetFile extends PseudoAssetFile {
	assetType: "text";
	editorType: "text";
	language: "json" | "text";
	value: string;
}

export interface PseudoImageAssetFile extends PseudoAssetFile {
	assetType: "image";
	editorType: "image";
	blob: Blob;
	width: number;
	height: number;
	hint?: any;
}

export interface PseudoVectorImageAssetFile extends PseudoAssetFile {
	assetType: "vector-image";
	editorType: "image";
	blob: Blob;
	width: number;
	height: number;
	hint?: any;
}

export interface PseudoAudioAssetFile extends PseudoAssetFile {
	assetType: "audio";
	editorType: "audio";
	duration: number;
	systemId: any;
	loop: boolean;
	hint: {
		extensions: string[]; // NOTE: playground で必要そうなものだけ一旦定義しておく
		[key: string]: any;
	};
}

export interface PseudoBinaryAssetFile extends PseudoAssetFile {
	assetType: "binary";
	editorType: "binary";
	blob: Blob;
}

export interface PseudoUnknownAssetFile extends PseudoAssetFile {
	assetType: "unknown";
	editorType: "unknown";
}

export interface PseudoAssetFile {
	/**
	 * 名前
	 */
	name: string;
	/**
	 * ファイル名 (aco.png)
	 */
	filename: string;
	/**
	 * アセットのファイルパスまたは Uri
	 */
	uri: string;
	/**
	 * AkashicEditor が識別する種別
	 */
	editorType: string;
	/**
	 * 対象のアセットを AkashicEditor で readOnly とするか
	 */
	readOnly?: boolean;
	/**
	 * 対象のアセットを AkashicEditor で非表示とするか
	 */
	hidden?: boolean;
	/**
	 * akashic-engine の Asset#id
	 */
	id: string;
	/**
	 * akashic-engine の Asset#path
	 */
	path: string;
	/**
	 * akashic-engine の Asset#type
	 * game.json の場合は "game.json"
	 */
	assetType: string;
	/**
	 * akashic-engine の Asset#global
	 */
	global?: boolean;
}

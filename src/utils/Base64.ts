// クライアント(GitHubPages+Jekyll)がbase64に対応できないためURL Encodingに変更

export function encode(str: string): string {
	return encodeURI(str);
}

export function decode(str: string): string {
	return decodeURI(str).replace(/\+/g, " ");
}

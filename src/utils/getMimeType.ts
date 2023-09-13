export function getMimeType(extension: string) {
	if (extension === ".ogg") return "audio/ogg";
	if (extension === ".m4a") return "audio/mp4";
	if (extension === ".aac") return "audio/aac";
	return "application/octet-stream";
}

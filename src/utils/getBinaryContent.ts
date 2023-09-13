import axios from "axios";

export async function getBinaryContent(url: string) {
	const ret = await axios.get(url, { responseType: "arraybuffer" });
	return ret.data;
}

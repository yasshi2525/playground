// akashic-engine-standalone を更新するスクリプト。
// usage node update_akashic_versions_json.js <akashic_engine_dist_tag>
// e.g. node update_akashic_versions_json.js latest

const { exec: execCallback } = require("child_process");
const path = require("path");
const util = require("util");
const axios = require("axios");
const { readFile, writeFile } = require("fs-extra");
const exec = util.promisify(execCallback);

const distTag = process.argv[2] ?? "latest";
const distUrlPlaceholder = "https://github.com/akashic-games/akashic-engine-standalone-release-action/releases/download/%TAG%/akashic-engine-standalone-%VERSION%.js";

(async () => {
  try {
    const { stdout: rawVersion } = await exec(`npm view @akashic/akashic-engine-standalone@${distTag} version`, { encoding: "utf-8" });
    const version = rawVersion.trim();
    const outputPath = path.join(__dirname, "..", "public", "engine", `akashic-engine-standalone-${version}.js`);
    const distUrl = distUrlPlaceholder
      .replace("%TAG%", encodeURIComponent(`akashic-engine@${version}`))
      .replace("%VERSION%", version);

    const js = await axios(distUrl);
    await writeFile(outputPath, js.data);

    const versionsJSONPath = path.join(__dirname, "..", "src", "constants", "versions.json");
    const versionsJSON = JSON.parse(await readFile(versionsJSONPath, "utf-8"));

    // NOTE: 常に最新のバージョンのみを利用する
    versionsJSON.akashicEngineVersions = [{
      version,
      name: `akashic-engine-standalone-${version}.js`
    }];
    await writeFile(versionsJSONPath, JSON.stringify(versionsJSON, undefined, 2));

    console.log("Updating akashic-engine-standalone was successful. If necessary, please run the following command to update the type definitions:");
    console.log();
    console.log("\x1b[33m%s\x1b[0m", `> node scripts/generate_akashic_definitions.js ${version}`);
    console.log();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

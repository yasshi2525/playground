const { readdir } = require("fs/promises");
const path = require("path");
const fs = require("fs-extra");

async function cleanupDir(dir) {
  const willUnlinkFilePaths = (await readdir(dir)).map(dirname => path.join(dir, dirname));
  for (const willUnlinkFilePath of willUnlinkFilePaths) {
    await fs.remove(willUnlinkFilePath);
  }
}

module.exports = cleanupDir;

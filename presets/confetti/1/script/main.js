function main () {
  const scene = new g.Scene({ game: g.game });
  scene.onLoad.add(() => {
    // ゲーム本体の処理
  });
  g.game.pushScene(scene);
}

module.exports = main;

function main () {
  const scene = new g.Scene({ game: g.game });
  scene.onLoad.add(() => {
    const paper = new g.FilledRect({ scene, x: g.game.width / 2, y: -100, width: 25, height: 25, anchorX: 0.5, anchorY: 0.5, cssColor: "red" });
    paper.onUpdate.add(() => {
      paper.y += 1;
      paper.modified();
    });
    scene.append(paper);
  })
  g.game.pushScene(scene);
}

module.exports = main;

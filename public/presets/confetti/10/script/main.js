function main () {
  const scene = new g.Scene({ game: g.game });
  scene.onLoad.add(() => {
    const paper = new g.FilledRect({ scene, x: g.game.width / 2, y: -100, width: 25, height: 25, anchorX: 0.5, anchorY: 0.5, cssColor: "red" });
    let theta = 0
    paper.onUpdate.add(() => {
      paper.angle += 5;
      paper.height = Math.sin(theta) * 25;
      theta += 0.1;
      paper.y += 1;
      paper.modified();
      if (paper.y > g.game.height + 50) {
        paper.destroy();
      }
    });
    scene.append(paper);
  })
  g.game.pushScene(scene);
}

module.exports = main;

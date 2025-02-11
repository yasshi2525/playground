function main () {
  const scene = new g.Scene({ game: g.game });
  scene.onLoad.add(() => {
    const paper = new g.FilledRect({ scene, x: g.game.width / 2, y: -100, width: 25, height: 25, anchorX: 0.5, anchorY: 0.5, cssColor: "red" });
    let theta = 0
    paper.onUpdate.add(() => {
      paper.angle += 5;
      paper.height = Math.sin(theta) * 25;
      theta += 0.1;
      paper.x = g.game.width / 2 + Math.cos(theta) * 20;
      paper.y += 1;
      paper.modified();
      if (paper.y > g.game.height + 50) {
        paper.destroy();
      }
    });
    scene.append(paper);
    const shadow = new g.FilledRect({ scene, x: paper.x, y: paper.y, width: paper.width, height: paper.height, anchorX: paper.anchorX, anchorY: paper.anchorY, cssColor: "black", opacity: 0 })
    shadow.onUpdate.add(() => {
      shadow.x = paper.x;
      shadow.y = paper.y;
      shadow.angle = paper.angle;
      shadow.height = paper.height;
      shadow.opacity = Math.abs(Math.cos(theta));
      shadow.modified();
      if (shadow.y > g.game.height + 50) {
        shadow.destroy();
      }
    })
    scene.append(shadow);
  })
  g.game.pushScene(scene);
}

module.exports = main;

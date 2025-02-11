function main () {
  const scene = new g.Scene({ game: g.game });
  scene.onLoad.add(() => {
    /**
     * @typedef {Object} InitParameterObject 紙生成時の初期パラメータ
     * @prop {number} x 初期x座標
     * @prop {number} size 紙の大きさ
     * @prop {number} angle 回転角(度)
     * @prop {number} color 色 (0～0xffffff)
     * @prop {number} theta 上下方向の回転角(ラジアン)
     * @prop {number} dw x方向への振れ幅
     * @prop {number} dy 描画の度の y 増分値
     * @prop {number} da 描画の度の angle 増分値(度)
     * @prop {number} dt 描画の度の theta 増分値(ラジアン)
     */
    /**
     * @param {InitParameterObject} param 初期値として与える値
     */
    const createPaper = (param) => {
      const paper = new g.FilledRect({ scene, x: param.x, y: -100, width: param.size, height: param.size, anchorX: 0.5, anchorY: 0.5, angle: param.angle, cssColor: `#${param.color.toString(16)}` });
      let theta = param.theta
      paper.onUpdate.add(() => {
        paper.angle += param.da;
        paper.height = Math.sin(theta) * param.size;
        theta += param.dt;
        paper.x = param.x + Math.cos(theta) * param.dw;
        paper.y += param.dy;
        paper.modified();
        if (paper.y > g.game.height + 50) {
          paper.destroy();
        }
      });
      scene.append(paper);
      const shadow = new g.FilledRect({ scene, x: paper.x, y: paper.y, width: paper.width, height: paper.height, anchorX: paper.anchorX, anchorY: paper.anchorY, angle: paper.angle, cssColor: "black", opacity: Math.abs(Math.cos(theta)) * 0.25 })
      shadow.onUpdate.add(() => {
        shadow.x = paper.x;
        shadow.y = paper.y;
        shadow.angle = paper.angle;
        shadow.height = paper.height;
        shadow.opacity = Math.abs(Math.cos(theta)) * 0.25;
        shadow.modified();
        if (shadow.y > g.game.height + 50) {
          shadow.destroy();
        }
      })
      scene.append(shadow);
    }
    scene.onUpdate.add(() => {
      if (g.game.random.generate() < 0.1) {
        createPaper({
          x: g.game.random.generate() * g.game.width,
          size: 15 + g.game.random.generate() * 10,
          angle: g.game.random.generate() * 360,
          color: Math.floor(g.game.random.generate() * 0xffffff),
          theta: g.game.random.generate() * Math.PI * 2,
          dy: 0.5 + g.game.random.generate() * 1.5,
          dw: 10 + g.game.random.generate() * 20,
          da: g.game.random.generate() * 1.5,
          dt: g.game.random.generate() * 0.1,
        })
      }
    });
  })
  g.game.pushScene(scene);
}

module.exports = main;

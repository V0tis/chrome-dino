const DINO_CONFIG = {
  x: 10,
  y: 10,
  width: 50,
  height: 50,
  draw(ctx) {
    if (ctx) {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
};

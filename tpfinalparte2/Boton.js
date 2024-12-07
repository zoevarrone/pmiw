class Boton {
  constructor(x, y, w, h, texto) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texto = texto;
  }

  mostrar() {
    fill(255);
    rect(this.x, this.y, this.w, this.h, 10);
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(this.texto, this.x + this.w / 2, this.y + this.h / 2);
  }

  pulsado() {
    if (mouseIsPressed) {
      if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
        return true;
      }
    }
  }
}

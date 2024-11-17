class Pelota {
  constructor(x, y, esVerde) {
    this.x = x;
    this.y = y;
    this.tam = 20;
    this.velX = random(-3, 3);
    this.velY = random(-3, 3);
    this.esVerde = esVerde;
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;

    // Rebotar en los bordes
    if (this.x <= 0 || this.x >= width) this.velX *= -1;
    if (this.y <= 0 || this.y >= height) this.velY *= -1;
  }

  mostrar() {
    if (this.esVerde) {
      fill(0, 255, 0); // color verde
    } else {
      fill(255, 0, 0); // color rojo
    }
    noStroke();
    ellipse(this.x, this.y, this.tam, this.tam);
  }

  reiniciar() {
    this.x = random(width);
    this.y = random(height);
    this.velX = random(-3, 3);
    this.velY = random(-3, 3);
    this.esVerde = random() > 0.5;
  }
}

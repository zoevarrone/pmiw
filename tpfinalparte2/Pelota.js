class Pelota {
  constructor(x, y, esVerde) {
    this.x = x;
    this.y = y;
    this.tam = 45;
    this.velX = random(-3, 3);
    this.velY = random(-3, 3);
    this.esVerde = esVerde;
  }

  mover() {
    this.x += this.velX;
    this.y += this.velY;

    // rebota en los bordes
    if (this.x <= 0 || this.x >= 620) this.velX *= -1;
    if (this.y <= 0 || this.y >= 460) this.velY *= -1;
  }

  mostrar() {
    if (this.esVerde) {
      image(pelotaVerdeImg, this.x, this.y, this.tam, this.tam); 
    } else {
      image(pelotaRojaImg, this.x, this.y, this.tam, this.tam);
    }
  }

  reiniciar() {
    this.x = random(width);
    this.y = random(height);
    this.velX = random(-3, 3);
    this.velY = random(-3, 3);
  }
}

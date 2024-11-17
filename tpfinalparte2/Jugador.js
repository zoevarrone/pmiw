class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 30; // tamaño del cuadrado
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
  }

  mostrar() {
    fill(255, 165, 0); // color naranja
    noStroke();
    rect(this.x, this.y, this.tam, this.tam);
  }

  atrapar(pelota) {
    let d = dist(this.x, this.y, pelota.x, pelota.y);
    if (d < this.tam / 2 + pelota.tam / 2) {
      if (pelota.esVerde) {
        juego.puntos += 10;
      } else {
        juego.perder();
      }
      return true;
    }
    return false;
  }
}

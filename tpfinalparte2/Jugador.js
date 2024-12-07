class Jugador {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 60;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW)) this.x -= 5;
    if (keyIsDown(RIGHT_ARROW)) this.x += 5;
    if (keyIsDown(UP_ARROW)) this.y -= 5;
    if (keyIsDown(DOWN_ARROW)) this.y += 5;
  }

  mostrar() {
    image(jugadorImg, this.x, this.y, this.tam, this.tam);
  }

  atrapar(pelota) {
    let d = dist(this.x, this.y, pelota.x, pelota.y);
    if (d < this.tam / 2 + pelota.tam / 2) {
      if (pelota.esVerde) {
        juego.puntos += 10;
      } else {
        juego.vidas -= 1;
        if (juego.vidas <= 0) {
          juego.perder();
        }
      }
      return true;
    }
  }
}

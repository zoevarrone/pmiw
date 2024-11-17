class Juego {
  constructor() {
    this.puntos = 0;
    this.terminado = false;
  }

  actualizar() {
    if (this.terminado) return;
    // Verificar si el jugador ha ganado
    if (this.puntos >= 100) {
      this.terminado = true;
      textSize(32);
      fill(0);
      textAlign(CENTER, CENTER);
      text("¡Ganaste!", width / 2, height / 2);
    }
  }

  mostrar() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Puntos: " + this.puntos, 10, 10);
  }

  perder() {
    this.terminado = true;
  }
}

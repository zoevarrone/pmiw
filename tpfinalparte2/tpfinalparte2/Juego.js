class Juego {
  constructor() {
    this.puntos = 0;
    this.vidas = 3;
    this.terminado = false;
  }

  iniciar() {
    this.puntos = 0;
    this.vidas = 3;
    this.terminado = false;
    jugador.x = width / 2;
    jugador.y = height - 50;

    for (let pelota of pelotas) {
      pelota.reiniciar();  // reinicia la posición y estado de cada pelota
    }
  }

  actualizar() {
    if (this.vidas <= 0) {
      this.terminado = true;
    }
  }

  mostrar() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text("Puntos: " + this.puntos, 10, 10);
    text("Vidas: " + this.vidas, 10, 30);
  }

  perder() {
    this.terminado = true;
  }
}

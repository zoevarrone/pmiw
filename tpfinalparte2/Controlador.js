class Controlador {
  mostrarInstrucciones() {
    fill(0);
    textSize(14);
    textAlign(RIGHT, BOTTOM);
    text("Usa las teclas de flecha para mover el cuadrado naranja.", width - 10, height - 10);
    text("Atrapá las pelotitas verdes y evita las rojas.", width - 10, height - 30);
  }
}

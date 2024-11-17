//Zoe Varrone y Pia Sena Ikes comision 2
let jugador;
let pelotas = [];
let juego;
let controlador;
let estadoJuego = 'inicio'; 
let botonJugar;
let botonCreditos;
let botonVolver;

function setup() {
  createCanvas(640, 480);
  botonJugar = new Boton(width / 2 - 100, height / 2 - 25, 200, 50, "Jugar");
  botonCreditos = new Boton(width / 2 - 100, height / 2 + 35, 200, 50, "Créditos");
  botonVolver = new Boton(width / 2 - 100, height / 2 + 35, 200, 50, "Volver");

 
  controlador = new Controlador();
  
  juego = new Juego();
  // Crear el jugador
  jugador = new Jugador(width / 2, height - 50);
  
  // pelotas verdes y rojas
  for (let i = 0; i < 10; i++) {
    pelotas.push(new Pelota(random(width), random(height), i % 2 === 0));
  }
}

function draw() {
  background(200);
  
 
  if (estadoJuego === 'inicio') {
    mostrarPantallaInicio();
  }
  else if (estadoJuego === 'jugando') {
  
    juego.actualizar();
    juego.mostrar();
  
    jugador.mover();
    jugador.mostrar();
  

    for (let pelota of pelotas) {
      pelota.mostrar();
      pelota.mover();
      if (jugador.atrapar(pelota)) {
        pelota.reiniciar();
      }
    }
  }
  else if (estadoJuego === 'fin') {
    mostrarPantallaFin();
  }
  else if (estadoJuego === 'creditos') {
    mostrarPantallaCreditos();
  }
}

function mostrarPantallaInicio() {
  background(255, 165, 0); // Pantalla naranja
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text("¡Bienvenido al Juego!", width / 2, height / 4);
  
 botonJugar.mostrar();
  

  botonCreditos.mostrar();
  
  if (botonJugar.pulsado()) {
    estadoJuego = 'jugando'; 
  }

 
  if (botonCreditos.pulsado()) {
    estadoJuego = 'creditos'; // Cambiar al estado de créditos
  }
}


function mostrarPantallaFin() {
  background(0);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  
  if (juego.terminado) {
    text("¡Juego Terminado!", width / 2, height / 3);
  }
  text("Puntos: " + juego.puntos, width / 2, height / 2);
  text("Haz clic para volver a jugar", width / 2, height / 1.5);
}

function mostrarPantallaCreditos() {
  background(255, 165, 0); // Pantalla naranja
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("Pia Sena Ikes y Zoe Varrone, Comisión 2", width / 2, height / 2 - 50);
  

  botonVolver.mostrar();
  
  if (botonVolver.pulsado()) {
    estadoJuego = 'inicio'; 
  }
}

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
    return false;
  }
}

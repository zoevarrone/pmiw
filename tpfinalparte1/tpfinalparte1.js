//Zoe Varrone y Pia Sena Ikes 
//Comision 2
// enlace de video https://youtu.be/8OZ3t3ShdHI

//variables
let pantallas = [];
let pantallaActual = 0;
let mySound;
let textos = [];

//pantallas, imagenes, archivo de textos, musica
function preload() {
  for (let i = 0; i < 14; i++) {
    pantallas[i] = loadImage("data/pantalla" + i + ".jpeg");
  }
  mySound = loadSound('data/cancion.mp3');
  textos = loadStrings('data/textos.txt');
}

//lienzo
function setup() {
  createCanvas(640, 480);
}

//textos
function draw() {
  background(200);
  image(pantallas[pantallaActual], 0, 0, 640, 480);
  let textoActual = textos[pantallaActual];
  let textoAncho = 600; // Ancho máximo para el texto
  let textoAlto = 60; // Altura del rectángulo
  let rectX = 20; // Posición X del rectángulo
  let rectY = 45; // Posición Y del rectángulo
  fill(178, 195, 255);
  rect(rectX, rectY, textoAncho + 10, textoAlto + 1); 
  fill(0)
  noStroke();
  textSize(18);
  textAlign(CENTER);
  text(textoActual, rectX + 5, rectY + 5, textoAncho, textoAlto);
  
//botones en sus respectivas pantallas
  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if (pantallaActual === 2) {
    mostrarBotonAvanzar();
  } else if (pantallaActual === 3) {
    mostrarBotonAvanzar();
  } else if (pantallaActual === 4) {
    mostrarBotonesLaencuentraNolaencuentra();
  } else if (pantallaActual === 5 || pantallaActual === 9 || pantallaActual === 10 || pantallaActual === 12 || pantallaActual === 13 || pantallaActual === 14 ) { 
    mostrarBotonReiniciar();
  } else if (pantallaActual === 7 || pantallaActual === 12 ) {
    mostrarBotonesEspectaculoDesaparece();
  } else if (pantallaActual === 1 || pantallaActual === 6 || pantallaActual === 7 || pantallaActual === 8 || pantallaActual === 11 || pantallaActual === 13) {
    mostrarBotonAvanzar();
  } else if (pantallaActual === 13) {
    mostrarBotonAtras();
}
}

//botones
function dibujarBoton(x, y, ancho, alto, colorRelleno, colorTexto, texto) {
  fill(colorRelleno);
  rect(x, y, ancho, alto);
  fill(colorTexto);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}
function mostrarBotonesInicio() {
  dibujarBoton(150, 400, 150, 50, color(255, 0, 0), color(255), "Iniciar aventura");
  dibujarBoton(400, 400, 150, 50, color(0, 255, 78), color(255), "Creditos");
}

function mostrarBotonReiniciar() {
  dibujarBoton(250, 400, 140, 50, color(255, 188, 0), color(0), "Reiniciar");
}

function mostrarBotonesLaencuentraNolaencuentra() {
  dibujarBoton(150, 400, 150, 50, color(255, 0, 0), color(255), "La encuentra");
  dibujarBoton(400, 400, 150, 50, color(0, 255, 44), color(0), "No la encuentra");
}

function mostrarBotonesEspectaculoDesaparece() {
  dibujarBoton(150, 400, 160, 60, color(0, 255, 0), color(255), "\nEspectaculo \nen el cielo");
  dibujarBoton(400, 400, 160, 60, color(255, 0, 0), color(255), "\nLlega su madre \ny todo desaparece");
}
function mostrarBotonAvanzar() {
  dibujarBoton(500, 400, 100, 50, color(254, 255, 0), color(0), "Siguiente");
} 

//Interaccion
function clicEnBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}
function mousePressed() {
  if (pantallaActual === 0) {
    if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 1;
    } else if (clicEnBoton(400, 400, 150, 50)) {
      pantallaActual = 13;
      if (!mySound.isPlaying()) {
        mySound.loop();
      }
    }
  } else if (pantallaActual === 13) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
      mySound.stop();
    }
  } else if (pantallaActual === 1) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 2;
    }
  } else if (pantallaActual === 2) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 3;
    }
  } else if (pantallaActual === 3) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 4;
    }
  } else if (pantallaActual === 4) {
    if (clicEnBoton(150, 400, 100, 50)) {
      pantallaActual = 5;
    } else if (clicEnBoton(400, 400, 100, 50)) {
     pantallaActual = 6;
    } 
  } else if (pantallaActual === 5) {
      if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual === 6) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 7;
    }
  } else if (pantallaActual === 7) {
     if (clicEnBoton(150, 400, 150, 50)) {
      pantallaActual = 8;
    } else if (clicEnBoton(400, 400, 150, 50)) {
     pantallaActual = 9;
    }
  } else if (pantallaActual === 8) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 10;
    }
  } else if (pantallaActual === 9) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual === 10) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
    } 
  } else if (pantallaActual === 11) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 12;
    }
  } else if (pantallaActual === 12) {
    if (clicEnBoton(250, 400, 140, 50)) {
      pantallaActual = 0;
    }
  } else if (pantallaActual === 13) {
    if (clicEnBoton(500, 400, 100, 50)) {
      pantallaActual = 14;
    }
}
}

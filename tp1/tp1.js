//Zoe Varrone
//Comision 2
//link del video: https://youtu.be/AKxOjMm9_uc
let imagen
let numFilas = 16;
let numCols = 8;
let diametroInicial = 12;
let incremento =2;
let diametroIncicial;

function preload() {
 
  imagen = loadImage("assets/circulo.jpg");

}

function setup() {
  createCanvas(800, 400);
}

function draw(){
  background(0);
  image(imagen, 0, 0, 400, 400);
 
  //filas que aumentan de tamaño
  for (let fila = 0; fila < numFilas; fila++) {
    for (let col = 0; col < numCols; col++) {
      
      circulosaumento(fila,col);
   }
  }
     
  //filas que disminuyen de tamaño
  for (let fila = 0; fila < numFilas; fila++) {
    for (let col = 0; col < numCols; col++) {
      
      circulosdisminuir(fila,col);
   }
  }
}


 

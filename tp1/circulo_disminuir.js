function circulosdisminuir( fila, col){
  let xPos = col * 25 + 615;
      let yPos = (fila + numFilas) * 25 - 385;
      let diametro = diametroInicial + (numCols - col - 1) * incremento;
     if (dist(mouseX, mouseY, xPos, yPos) < 80) {
      fill(255, 0, 209);
    } else {
      fill(random(242), random(200,236), random(219,250));
    }
      ellipse(xPos, yPos, diametro, diametro);
  }

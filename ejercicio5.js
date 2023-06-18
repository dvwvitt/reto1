function drawX(tamano) {
  const medio = Math.floor(tamano / 2);

  for (let i = 0; i < tamano; i++) {
    let x = '';

    for (let j = 0; j < tamano; j++) {
      if (j === i || j === tamano - 1 - i) {
        x += '*';
      } else {
        x += ' ';
      }
    }

    console.log(x);
  }
}

// Ejemplo de uso
drawX(5); // Dibuja una X con tamaño 5
  
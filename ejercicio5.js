const drawX = (tamano) => {
  const medio = Math.floor(tamano / 2); // Calcula el índice del elemento del medio de la "X"

  for (let i = 0; i < tamano; i++) { // Itera sobre las filas de la matriz
    let x = ''; // Variable para almacenar la cadena de caracteres de cada fila

    for (let j = 0; j < tamano; j++) { // Itera sobre las columnas de cada fila
      x += (j === i || j === tamano - 1 - i) ? '*' : ' '; // Agrega un asterisco si es una posición de la diagonal, o un espacio en blanco en las demás posiciones
    }

    console.log(x); // imprime
  }
}
drawX(5); // Dibuja una X con tamaño 5

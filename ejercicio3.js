//La declaración de la función countNameRepetitions indica que recibirá un parámetro llamado names.
function countNameRepetitions(names) {
  //Se declara una variable nameCounts como un objeto vacío para almacenar los recuentos de cada nombre.
  const nameCounts = {};
  /*Se utiliza el método forEach para iterar sobre cada elemento de la matriz names. Para cada nombre, 
  se actualiza el contador en el objeto nameCounts. Si el nombre aún no existe en nameCounts, se inicializa con un contador de 1*/
  names.forEach((name) => {
    nameCounts[name] = (nameCounts[name] || 0) + 1;
  });
  /*Se utiliza un bucle para iterar sobre las propiedades del objeto nameCounts. Para cada nombre, 
  se imprime en la consola junto con una cadena de '*' generada por el método repeat(), utilizando el contador correspondiente.*/
  for (let name in nameCounts) {
    console.log(`${name}: ${"*".repeat(nameCounts[name])}`);
  }
}
//Se cierra la función countNameRepetitions y se proporciona un ejemplo de uso, donde se llama a la función con la matriz de nombres proporcionada. 

let names = [
  "Diego",
  "Alejandro",
  "Santiago",
  "Santiago",
  "Alejandro",
  "Santiago",
  "Diego",
  "Felipe",
  "Alejandro",
  "Felipe",
  "Alejandro",
  "Felipe",
  "Diego",
  "Alejandro",
  "Santiago",
  "Santiago",
  "Alejandro",
  "Santiago",
  "Diego",
  "Felipe",
  "Alejandro",
  "Felipe",
  "Alejandro",
  "Felipe",
];
countNameRepetitions(names);

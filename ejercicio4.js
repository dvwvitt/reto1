//define la funcion  fizzBuzz que toma un parametro 'n'
function fizzBuzz(n) {
  //inicio un bucle for para iterar desde 1 hasta n incrementano i en cada iteracion
  for (let i = 1; i <= n; i++) {
      /*utilizo el operador ternario para comprobar si i es divisible por 3 y/o 5. si i 
      es divisible por 3 se asigna fizz a output y si no se asigna a una cadena vacia.
      despues hace lo mismo con un operador ternario para comprobar si i es divisible po 5,
      si es true agrega la cadena Buzz a output.
      asi output tiene Fizz y/o Buzz dependiendo de las condiciones
      */
    const output = (i % 3 === 0 ? "Fizz" : "") + (i % 5 === 0 ? "Buzz" : "");
    /*imprimo 'output' si no esta vacio, es decir si 'i' es divisble por uno o ambos, si no se imprime el # 'i' tal cual*/
    console.log(output || i);
  }
}
/*Implemento esta funcion con el argumento (20)*/
fizzBuzz(20);
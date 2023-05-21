function next_pal(num) {
    num++;
    // While es para repetir el bloque mientras se cumple con la condicion de buscar el siguiente numero palindromo. 
    while (!isPalindrome(num)) {
      num++;
    }
    return num;
  }
  /* esta funcion es auxiliar para verificar si es un numero es palindromo.
    se toma el numero de entrada y devuelve 'true' si el se lee igual de derecha a izquierda y viceversa, y devuelve 'false; si no cumple con la lectura 
    Convierte el número en una cadena utilizando el método toString().
    Divide la cadena en un array de caracteres utilizando split('').
    Invierte el orden de los elementos en el array utilizando reverse().
    Vuelve a unir los caracteres del array en una cadena utilizando join('').
    Compara esta cadena invertida con la cadena original. Si son iguales, el número es un palíndromo y la función devuelve true. Si no son iguales, 
    el número no es un palíndromo y la función devuelve false.
*/
  function isPalindrome(num) {
    return num.toString() === num.toString().split('').reverse().join('');
  }
  let num = 8884
  
  console.log(next_pal(num));  // Salida: 8888
  
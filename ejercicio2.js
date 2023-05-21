
function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";//esta variable almacena el formato inicial(xxx) xxx-xxx
  
    for (var i = 0; i < numbers.length; i++) { //"var" se usa con el bucle "for" para reemplazar las x con "numbers"
      format = format.replace('x', numbers[i]);
    }
  
    return format;//retorna a la funcion "crratePhoneNumber"
  }
  
  console.log(createPhoneNumber([5, 5, 5, 1, 3, 4, 7, 8, 9, 0])) ;
  
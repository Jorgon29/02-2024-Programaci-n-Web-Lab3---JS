//Calcula una X cantidad de valores de la secuencia de fibonacci, y los devuelve como array
const fibonacciCalculate=(quantity)=> {
    if(quantity == 0){
      return 0;
    }
    if(quantity == 1){
      return 1;
    }
    let fibonacci = [0 ,1];
    for (let index = 2; index < quantity; index++) {
      fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
    }
    return fibonacci;
}
//Solicita la cantidad de valores a generar, y en caso de no ser provisto de un valor valido se termina la ejecucion
const requestQuantity = () => {
    let quantity = prompt("¿Cuántos números de la secuencia desea generar?");
    if(quantity < 0 || Math.floor(quantity) != quantity){
      alert("Valor no valido");
      die("Valor no valido");
    }
    return quantity;
}
//Main encargado de llamar a las funciones en orden y encargarse del caso se provea de un 0
const main = () => {
  let quantity = requestQuantity();
  let sequence = fibonacciCalculate(quantity);
  if(sequence == 0){
    alert("No se han generado números");
    return;
  }
  alert("Los primeros " + quantity + " números de la secuencia de fibonacci son: " + sequence);
}

main();

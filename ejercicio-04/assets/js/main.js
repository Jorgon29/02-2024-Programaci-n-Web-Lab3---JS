const createCounter = (max) => {
  return rangeFrom0(max);
}

function rangeFrom0(limit){
    let counter = [];
    for (let index = 0; index <= limit; index++) {
      counter.push(index);
    }
    return counter;
}

const showCounter = (counter) => {
    for (const num in counter) {
      alert(num);
    }
}

const requestNumber=()=>{ 
  let result = -1;
  do { 
    result = prompt("Introduzca un numero entero positivo");
    if (result < 0 || isNaN(result) || Math.floor(result) != result){
      alert("Introduza un valor valido");
    }
  } while (result < 0 || isNaN(result) || Math.floor(result) != result);  
  return result;
}

const main = () => {
  const max = requestNumber();
  const counter = createCounter(max);
  showCounter(counter);
}

main();

export function createCalculator() {
  // Tu código aquí 👈
  let numPrimary = 0;
  //función suma
  function add(numAdd) {
    return numPrimary += numAdd;
  }
  //función resta
  function subtract(numSubtract) {
    return numPrimary -= numSubtract;
  }
  //función multiplicar
  function multiply(numMultiply) {
    return numPrimary *= numMultiply;
  }
  //función dividir
  function divide(numDivide) {
    return numPrimary /= numDivide;
  }
  //función limpiar resultado
  function clear() {
    return numPrimary *= 0;
  }
  //función devolver total acumulado
  function getTotal() {
    return numPrimary;
  }  
  
  //objeto con funciones a devolver
  return {
    add,
    subtract,
    multiply,
    divide,
    clear,
    getTotal
  };

}
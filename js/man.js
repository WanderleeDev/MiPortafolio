export function createCalculator() {
  // Tu c贸digo aqu铆 馃憟
  let numPrimary = 0;
  //funci贸n suma
  function add(numAdd) {
    return numPrimary += numAdd;
  }
  //funci贸n resta
  function subtract(numSubtract) {
    return numPrimary -= numSubtract;
  }
  //funci贸n multiplicar
  function multiply(numMultiply) {
    return numPrimary *= numMultiply;
  }
  //funci贸n dividir
  function divide(numDivide) {
    return numPrimary /= numDivide;
  }
  //funci贸n limpiar resultado
  function clear() {
    return numPrimary *= 0;
  }
  //funci贸n devolver total acumulado
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
console.log('Olá, Mundo!')
let numbers = [
  2,
  3,
  5,
];
function sum(numberArray) {
  let mat = 0;
  for (var element of numberArray) {
    mat += element;
  }
  return mat;
};
console.log(sum(numbers));
const array = [4, 8, 1, 11, 6, 7, 10];
function maxNum(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log("Maximum number: ", max);
}
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log("Sum of all elements:", sum);
}
function oddNum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      count++;
    }
  }
  console.log("No.of odd numbers are: ", count);
}
console.log(array);
maxNum(array);
sum(array);
oddNum(array);

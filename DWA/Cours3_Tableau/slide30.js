const array = [2, 5, 9, 11, 29];
console.log("*****for******");
for (let i = 0; i < array.length; i++) {
  console.log(`Index $ {i} = ${array[i]}`);
}
console.log("*****forEach******");
array.forEach((e, i) => {
  console.log(`Index ${i} = ${e}`);
});
console.log("*****for of******");
let i = 0;
for (const value of array) {
  console.log(`Index ${i++} = ${value}`);
}
console.log("*****for in******");
for (const index in array) {
  console.log(`Index ${index} = ${array[index]}`);
}

console.log("*****for array.entries()******");
for (const [index, value] of array.entries()) {
  console.log(`Index ${index} = ${value}`);
}

const array = [1, 1, 1];
array.push(4);
console.log(array);

const result = array.push(5, 6);
console.log(array);
console.log(result);

const resultat = array.unpush(5, 6);
console.log(array);
console.log(result);

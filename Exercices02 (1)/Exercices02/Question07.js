function fibonacci(x){
  var a = 1, b = 0, temp;

  while (x >= 0){
    temp = a;
    a = a + b;
    b = temp;
    x--;
  }

  return b;
}

console.log(fibonacci(10))
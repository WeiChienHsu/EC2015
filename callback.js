function cal(num1, num2, callback){
  return callback(num1, num2);
}

let add = (a,b) => {
  return a + b;
}

let minus = (a,b) => {
  return a - b;
}

console.log(cal(1,3,minus));
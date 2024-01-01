const num = 5;

function multiplyByTwo(input) {
  console.log(`multiplyByTwo(${input})`);
  const result = input * 2;
  return result;
}

function multiplyByFour(input) {
  const firstMultiply = multiplyByTwo(input);
  const secondMultiply = multiplyByTwo(firstMultiply);
  console.log("multiplyByFour");
  return secondMultiply;
}

multiplyByFour(num);
console.log("global execution");

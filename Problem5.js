function monthlySavings(array, livingCost){
    let sum = 0;
  if (Array.isArray(array) === false || typeof livingCost !== "number") {
    return "invalid input";
  }
  for (let arr of array) {
    if (arr >= 3000) {
      const tex = (arr * 20) / 100;
      arr = arr - tex;
    }
    sum = sum + arr;
  }
  const output = sum - livingCost;
  if (output < 0) {
    return "earn more";
  }
  return output;
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));
console.log(monthlySavings(100, [900, 2700, 3400]));

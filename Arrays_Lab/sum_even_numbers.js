function even(input) {
  const evenSum = input
    .map(Number)                 
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);

  console.log(evenSum);
}
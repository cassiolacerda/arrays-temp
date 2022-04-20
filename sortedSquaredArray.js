const arrayTestCase1 = [1, 2, 3, 5, 6, 8, 9];
const arrayTestCase2 = [-2, -1];
const arrayTestCase3 = [-10, -5, 0, 5, 10];

const getSortedSquareArray = (numbers) => {
  const onlyIntegers = numbers.filter((n) => Number.isInteger(n));
  if (Array.isArray(onlyIntegers) && onlyIntegers.length) {
    return onlyIntegers
      .map((n) => Math.abs(n))
      .sort((a, b) => a - b)
      .map((n) => Math.pow(n, 2));
  }
  return [];
};

const sortedSquareArrayTestCase1 = getSortedSquareArray(arrayTestCase1);
const sortedSquareArrayTestCase2 = getSortedSquareArray(arrayTestCase2);
const sortedSquareArrayTestCase3 = getSortedSquareArray(arrayTestCase3);

console.log("sortedSquareArrayTestCase1", sortedSquareArrayTestCase1);
console.log("sortedSquareArrayTestCase2", sortedSquareArrayTestCase2);
console.log("sortedSquareArrayTestCase3", sortedSquareArrayTestCase3);

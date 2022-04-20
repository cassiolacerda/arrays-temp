const testCase1 = {
  coins: ["ddadsad", "5", 7, 1, 1, 2, 3, 22],
};
const testCase2 = {
  coins: [1, 1, 1, 1, 1],
};
const testCase3 = {
  coins: [1, 5, 1, 1, 1, 10, 15, 20, 100],
};
const testCase4 = {
  coins: [],
};

const getFilteredValue = (value) => {
  if (typeof value === "number") {
    return value;
  } else if (typeof value === "string") {
    try {
      const testNumber = parseInt(value, 10);
      return !Number.isNaN(testNumber);
    } catch (error) {
      return false;
    }
  }
  return false;
};

const getNonConstructibleChange = ({ coins }) => {
  if (Array.isArray(coins) && coins.length) {
    return coins
      .filter(getFilteredValue)
      .map(n => parseInt(n, 10))
      .sort((a, b) => a - b)
      .reduce((sum, coin) => (coin > sum + 1 ? sum + 1 : sum + coin));
  }
  return 1;
};

const nonConstructibleChangeTestCase1 = getNonConstructibleChange(testCase1);
const nonConstructibleChangeTestCase2 = getNonConstructibleChange(testCase2);
const nonConstructibleChangeTestCase3 = getNonConstructibleChange(testCase3);
const nonConstructibleChangeTestCase4 = getNonConstructibleChange(testCase4);

console.log("nonConstructibleChangeTestCase1", nonConstructibleChangeTestCase1);
console.log("nonConstructibleChangeTestCase2", nonConstructibleChangeTestCase2);
console.log("nonConstructibleChangeTestCase3", nonConstructibleChangeTestCase3);
console.log("nonConstructibleChangeTestCase4", nonConstructibleChangeTestCase4);

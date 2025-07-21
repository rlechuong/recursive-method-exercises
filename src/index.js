import "./styles.css";

// 1) Write a function called sumRange. It will take a number and return the sum
// of all numbers from 1 up to the number passed in.

function sumRange(number) {
  if (number === 0) {
    return 0;
  }

  return number + sumRange(number - 1);
}

// console.log(sumRange(3)); // 6

// 2) Write a function called power which takes in a base and an exponent. If
// the exponent is 0, return 1.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  return base * power(base, exponent - 1);
}

// console.log(power(2, 4)); // 16
// console.log(power(2, 3)); // 8
// console.log(power(2, 2)); // 4
// console.log(power(2, 1)); // 2
// console.log(power(2, 0)); // 1

// 3) Write a function that returns the factorial of a number. As a quick
// refresher, a factorial of a number is the result of that number multiplied by
// the number before it, and the number before that number, and so on, until
// you reach 1. The factorial of 1 is just 1.

function factorial(number) {
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

// console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 === 120

// 4) Write a function called all which accepts an array and a callback and
// returns true if every value in the array returns true when passed as
// parameter to the callback function.

function all(array, callback) {
  if (array.length === 0) {
    return true;
  }

  let removedElement = array.shift();

  if (!callback(removedElement)) {
    return false;
  } else {
    return all(array, callback);
  }
}

// console.log(
//   all([1, 2, 9], function (num) {
//     return num < 7;
//   }),
// );

// 5) Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all.

function productOfArray(array) {
  let copyArray = array.slice();

  if (copyArray.length === 0) {
    return 1;
  } else {
    let removedElement = copyArray.shift();
    return removedElement * productOfArray(copyArray);
  }
}

// console.log(productOfArray([1,2,3])); // 6
// console.log(productOfArray([1,2,3,10])); // 60

// 6) Write a function called contains that searches for a value in a nested
// object. It returns true if the object contains that value.

function contains(object, value) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      if (object[key] === value) {
        return true;
      } else if (typeof object[key] === "object" && object[key] !== null) {
        return contains(object[key], value);
      }
    }
  }
  return false;
}

let nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

// console.log(contains(nestedObject, 44)); // true
// console.log(contains(nestedObject, "foo")); // false
// console.log(contains(nestedObject, "foo2")); // true

// 7) Given a multi-dimensional integer array, return the total number of
// integers stored inside this array

function totalIntegers(array) {
  let copyArray = array.slice();

  if (copyArray.length === 0) {
    return 0;
  }

  let removedElement = copyArray.shift();

  if (Number.isInteger(removedElement)) {
    return 1 + totalIntegers(copyArray);
  } else if (Array.isArray(removedElement)) {
    return totalIntegers(removedElement) + totalIntegers(copyArray);
  } else {
    return totalIntegers(copyArray);
  }
}

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

// 8) Write a function that sums squares of numbers in list that may contain
// more lists.

function sumSquares(array) {
  let copyArray = array.slice();

  if (copyArray.length === 0) {
    return 0;
  }

  let removedElement = copyArray.shift();

  if (Number.isInteger(removedElement)) {
    return removedElement * removedElement + sumSquares(copyArray);
  } else if (Array.isArray(removedElement)) {
    return sumSquares(removedElement) + sumSquares(copyArray);
  }
}

// console.log(sumSquares([1, 2, 3])); // 1 + 4 + 9 = 14
// console.log(sumSquares([[1, 2], 3])); // 1 + 4 + 9 = 14
// console.log(sumSquares([[[[[[[[[1]]]]]]]]])); // 1 = 1
// console.log(sumSquares([10, [[10], 10], [10]])); // 100 + 100 + 100 + 100 = 400

// 9 ) The function should return an array containing repetitions of the number
// argument. For instance, replicate(3, 5) should return [5,5,5]. If the times
// argument is negative, return an empty array.

function replicate(argument, number) {
  if (argument <= 0) {
    return [];
  } else if (argument > 0) {
    let finalArray = [];
    finalArray.push(number);
    return finalArray.concat(replicate(argument - 1, number));
  }
}

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

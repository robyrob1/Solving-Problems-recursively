/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  // let sum = 0;
  if (arr.length > 0) {
    let [var1, ...restArr] = arr;
    return var1 + sumArray(restArr);
  } else return 0;
}

/*
function tester(...restParameters) {}; //restParameter => [p1, p2, p3];
tester(p1, p2, p3)

let arr = [1, 2, 3, 4];
[p1, p2, p3, p4] = arr;
[p1, ...restOfArray] = arr; // restOfArray => [2, 3, 4];
*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}

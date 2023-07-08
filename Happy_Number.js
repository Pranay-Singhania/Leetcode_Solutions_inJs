// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Example 2:

// Input: n = 2
// Output: false

// Constraints:

//     1 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let nums = n,
    flag = 1,
    isHappy = false;
  const sq = (nums) => {
    let sum = 0;
    while (nums > 0) {
      const digit = nums % 10;
      sum += digit ** 2;
      nums = Math.floor(nums / 10);
    }
    return sum;
  };
  let hash = {};
  while (flag) {
    let sumsq = sq(nums);
    if (sumsq === 1) {
      isHappy = true;
      break;
    } else if (hash[nums]) {
      isHappy = false;
      break;
    } else {
      hash[nums] = true;
      nums = sumsq;
    }
  }
  return isHappy;
};

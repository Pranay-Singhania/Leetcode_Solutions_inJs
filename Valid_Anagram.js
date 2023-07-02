// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let counts = {};
  if (s.length !== t.length) return false;
  for (let key of s) counts[key] = counts[key] ? counts[key] + 1 : 1;
  for (let key of t)
    if (counts[key] > 0) counts[key]--;
    else return false;
  return true;
};

// https://leetcode.com/problems/valid-palindrome/

// /**
//  * @param {string} s
//  * @return {boolean}
//  */ 
var isPalindrome = function(s) {
  var 
    i = 0, 
    j = s.length -1,
    r = /[A-Za-z0-9]/

  function isValid(m, n) {
    if (m == n) {
      return true
    }
    return /[A-Za-z]/.test(m) && /[A-Za-z]/.test(n) &&
      Math.abs(m.charCodeAt(0) - n.charCodeAt(0)) == 32 
  }

  while (i < j) {
    while (!r.test(s[i])) {
      i++
    }
    while (!r.test(s[j])) {
      j--
    }
    if (i === j) break
    if (!isValid(s[i], s[j])) return false
    i++
    j--
  }
  return true
};

console.log(isPalindrome("aA"))

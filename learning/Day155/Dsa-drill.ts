/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */

function isPalindrome(s: string): boolean {
  const cleaned = s
    .split("")
    .filter((c) => /[a-zA-Z0-9]/.test(c))
    .join("")
    .toLowerCase()
    .split("");
  console.log(cleaned);
  let newStr = [];
  for (let i = cleaned.length - 1; i >= 0; i--) newStr.push(cleaned[i]);
  console.log(newStr);
  return newStr.join("") === cleaned.join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

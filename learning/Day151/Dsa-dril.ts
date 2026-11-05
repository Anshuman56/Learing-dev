// Problem: Valid Anagram (LeetCode 242)
// In my words: You get an  array and you have to find the which two value are adding to make the target.
// Brute force idea:
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] === target) return [i, j];
//   }
// }
// Better idea:
// Time complexity: O(n²) because there are two loops.
// Space complexity: O(1) because giving one result at the end.
// Time taken: 33 min | Needed hint? yes/no

// Problem: Valid Anagram (LeetCode 242)
// In my words: You get an  array and you have to find the which two value are adding to make the target.
// Brute force idea:
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] === target) return [i, j];
//   }
// }
// Better idea:function twoSum(nums: number[], target: number): number[] {
//   const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const item = nums[i];
//     const difference = target - item;

//     console.log(map);
//     if (map.has(difference)) {
//       return [map.get(difference), i];
//     }
//     map.set(item, i);
//   }

//   return [];
// }
// Time complexity: O(n) because there are two loops.
// Space complexity: O(1) because giving one result at the end.
// Time taken: 214 min | Needed hint? yes/no

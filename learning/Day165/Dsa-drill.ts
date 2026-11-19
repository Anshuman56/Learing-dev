/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1*/

function singleNumber(nums: number[]): number {
  const map = new Map();
  nums.forEach((item) => {
    if (map.has(item)) map.set(item, map.get(item) + 1);
    else map.set(item, 1);
  });
  for (let [key, value] of map) {
    if (value === 1) return key;
  }
}

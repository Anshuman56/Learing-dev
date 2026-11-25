/* 349. Intersection of Two Arrays
Solved
Easy
Topics
premium lock icon
Companies
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.*/

function intersection(nums1: number[], nums2: number[]): number[] {
  const map1 = new Map();
  const map2 = new Map();
  nums1.forEach((item) => {
    if (map1.has(item)) map1.set(item, map1.get(item) + 1);
    else map1.set(item, 1);
  });
  nums2.forEach((item) => {
    if (map2.has(item)) map2.set(item, map2.get(item) + 1);
    else map2.set(item, 1);
  });
  const result = [];
  for (let [key, value] of map1) {
    if (map1.has(key) && map2.has(key)) result.push(key);
  }
  return result;
}

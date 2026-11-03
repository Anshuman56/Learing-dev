// Problem: Valid Anagram (LeetCode 242)
// In my words: it is a problem where you compare two string they are equal or not.
// Brute force idea:
// Better idea: I just create two map object of each string and compare them with each key and value.
// Time complexity: O(n) because there are only one loop for each string comparison.
// Space complexity: O(1) because return only one value.
// Time taken: 9 min |Beats 84.32%

function isAnagram(s: string, t: string): boolean {
const map1 = new Map();
const map2 = new Map();

s.split('').forEach(item => {
if(map1.has(item))
map1.set(item, map1.get(item) + 1)
else
map1.set(item, 1)
})

t.split('').forEach(item => {
if(map2.has(item))
map2.set(item, map2.get(item) + 1)
else
map2.set(item, 1)
})

     if (map1.size !== map2.size) return false;

for (const [key, value] of map1) {
if (!map2.has(key) || map2.get(key) !== value) {
return false;
}
}
return true;

}

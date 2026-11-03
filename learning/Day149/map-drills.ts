const str = "anagram";
const str2 = "naagram";
const map = new Map();
const map2 = new Map();
str.split("").forEach((item) => {
  if (map.has(item)) map.set(item, map.get(item) + 1);
  else map.set(item, 1);
});
str2.split("").forEach((item) => {
  if (map2.has(item)) map2.set(item, map2.get(item) + 1);
  else map2.set(item, 1);
});
function compare() {
  if (map.size !== map2.size) return false;
  for (const [key, value] of map) {
    if (!map2.has(key) || map2.get(key) !== value) {
      return false;
    }
  }
  return true;
}

console.log(compare());

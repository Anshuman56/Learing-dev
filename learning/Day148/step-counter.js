let step = 0;
for (let i = 0; i < 1000; i++) {
  for (let j = 0; j < 1000; j++) step++;
}
console.log(step);
// One loop, and inside it, call arr.includes(x) will give O(n²), Because it inside another loop and the include in O(n).
// “Two loops one after another cost , which is O(n), because they are separate loops and run by there own.”
// “One loop inside another costs , which is O(n²), because one statement run through the two loop.”

// 1
function first(arr) {
return arr[0];
}

- O{1}, O{1}. it will execute one statement and generate one answer.

// 2
function sum(arr) {
let total = 0;
for (const x of arr) total += x;
return total;
}

- O{n}, O{1}. It will run the n time and generate one result.

// 3
function hasPairSum10(arr) {
for (let i = 0; i < arr.length; i++) {
for (let j = 0; j < arr.length; j++) {
if (i !== j && arr[i] + arr[j] === 10) return true;
}
}
return false;
}

- O{n \* n}, O{1}. it will run n square time because of the two loop and give one result.
  // 4
  function double(arr) {
  return arr.map(x => x \* 2);
  }
- O{n}, O{n}. It will generate another array and it will run for every element in the array.
  // 5
  function minAndMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (const x of arr) if (x < min) min = x;
  for (const x of arr) if (x > max) max = x;
  return [min, max];
  }
- O{n}, O{1}.
  // 6
  function sortedCopy(arr) {
  return [...arr].sort((a, b) => a - b);
  }
- O{n log n}, O{n}
  // 7
  function containsAll(a, b) {
  return b.every(x => a.includes(x));
  }
- O{n\* m}, O{1}
  // 8
  function halvingSteps(n) {
  let steps = 0;
  while (n > 1) {
  n = Math.floor(n / 2);
  steps++;
  }
  return steps;
  }
- O{log n}, O{1}

// function reverseInPlace(arr: number[]) {
//   let j = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (i > j || j === i) break;
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//   }
//   console.log(arr);
// }
// reverseInPlace([2, 45, 6, 3, 5]);

function isPalindromeWord(word: string) {
  word = word
    .split("")
    .filter((item) => /[a-z0-9]/i.test(item))
    .join("");
  const strArr = word.split("").filter((item) => /[a-z0-9]/i.test(item));
  let j = strArr.length - 1;
  for (let i = 0; i < strArr.length; i++) {
    if (i > j || j === i) break;
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    j--;
  }
  console.log(strArr.join("") === word);
}
isPalindromeWord("33level 33");
isPalindromeWord("hello");

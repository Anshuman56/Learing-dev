// new Promise((resolve, reject) => {
//   resolve("Starting");
// })
//   .then((result) => {
//     alert(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("1 second passed"), 1000);
//     });
//   })
//   .then((result) => {
//     alert(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("2 second passed"), 2000);
//     });
//   })
//   .then((result) => {
//     alert(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("Done!"), 3000);
//     });
//   })
//   .then((result) => {
//     alert(result);
//   });

async function showResult() {
  alert("Strating");
  let result1 = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("1 second passed!"), 1000);
  });
  alert(result1);
  let result2 = await new Promise((resolve, reject) => {
    setTimeout(() => resolve("2 second passed!"), 2000);
  });
  alert(result2);
  let result3 = await new Promise((resolve, reject) => {
    setTimeout(() => resolve(" Done!"), 3000);
  });

  alert(result3);
}

showResult();

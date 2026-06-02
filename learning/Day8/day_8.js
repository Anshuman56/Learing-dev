let mySelf = {
  name: "Anshuma Dehury",
  age: "30",
  city: "Angul, odisha",
  skills: ["html", "css", "javaScirtp"],
};

for (let key in mySelf) {
  console.log(mySelf[key]);
}

mySelf.introduce = function () {
  return `Hi, I'm ${this.name} from ${this.city}`;
};

console.log(mySelf.introduce());

function Student(name, mark) {
  this.name = name;
  this.mark = mark;
}

let arr = [
  new Student("Ram", 50),
  new Student("Sam", 66),
  new Student("Dam", 88),
];

function highMark(arr) {
  let high = 0;
  let obj;
  for (let i = 0; i < arr.length; i++) {
    if (high < arr[i].mark) {
      high = arr[i].mark;
      obj = arr[i];
    }
  }
  return obj.name;
}
console.log(highMark(arr));

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]?.address?.city);
}

let counter = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  reset() {
    this.count = 0;
  },
  read() {
    return this.count;
  },
};

counter.increment();
counter.increment();
counter.decrement();
counter.reset();
console.log(counter.read());

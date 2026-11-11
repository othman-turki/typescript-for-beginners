// Arrays
let stringArr = ["Hello", "World", "TypeScript"];
// console.log(typeof stringArr);

let guitars = ["Strato", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "One";
stringArr.push("Two");

guitars[0] = 1984;
guitars.unshift("Jazzmaster");
// console.log(guitars);

guitars = stringArr;
// console.log(guitars);

let test = [];
let bands: string[] = [];

// Tuples
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];
// mixed = myTuple;
// console.log(mixed);

myTuple[1] = 42;

// Objects
let myObj: object;
myObj = [];
// console.log(typeof myObj);
myObj = bands;
// console.log(typeof myObj);
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};
// exampleObj.prop2 = 42;
exampleObj.prop2 = false;

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

interface Guitarist {
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
};

// evh.yearsActive = 10;
// evh = jp;

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!`;
  }

  return `Hello!`;
};

// console.log(greetGuitarist(jp));

// Enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction.Up);

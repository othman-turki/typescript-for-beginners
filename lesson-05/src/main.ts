type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "hello";
let b = a as Two;
let c = a as Three;
// let c: Three = "there";

// console.log(c);

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat",
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem with this, but a string is returned from the function
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string;
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("myId") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("myId");

img.src;
myImg.src;

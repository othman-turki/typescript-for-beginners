class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  secondLanguage!: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript",
  ) {
    // this.name = name;
    // this.music = music;
    // this.age = age;
    // this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age} years old.`;
  }
}

const Dave = new Coder("Dave", "Rock", 31);
// console.log(Dave);

// Dave.age = 30; // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.age); // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Dave.getAge());

// console.log(Dave.lang); // Error: Property 'lang' is protected and only accessible within class 'Coder' and its subclasses.

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Pop", 25);
// console.log(Sara.getLang());
// console.log(Sara.age); // Error: Property 'age' is private and only accessible within class 'Coder'.
// console.log(Sara.getAge());
// console.log(Sara.lang);

// -----------------------------------------------------------------------------

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  constructor(
    public name: string,
    public instrument: string,
  ) {
    // this.name = name;
    // this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Page", "guitar");
console.log(Page.play("strums"));

// -----------------------------------------------------------------------------

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

// console.log(John.id);
// console.log(Steve.id);
// console.log(Amy.id);

// console.log(Peeps.count);

// -----------------------------------------------------------------------------

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["Neil Young", "Led Zep"];
console.log(myBands.data);

myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);

// myBands.data = [...myBands.data, 42]; // Error: Param is not an array of strings

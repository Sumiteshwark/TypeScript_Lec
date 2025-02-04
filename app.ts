var str: string = "hello";

//TypeScript Primitive Types
let value: null = null; //null only contains null and its of type object
let value2: undefined = undefined; //undefined only contains undefined and its of type undefined
let value4: void = undefined; //void only contains undefined or no return value from function
let value5: never; //Used in infinite loop or to throw error
let value3: any = "Sumit"; //any can be anything
let value6: unknown = "Sumit"; //unknown can be anything but need to check the type before using

//Array
var array = [1, 2, "check", { name: "Sumit" }, { age: 22 }];

//Tuple
var tuple: [string, number, boolean] = ["Sumit", 22, true];

//Enum
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
var myColor: Color = Color.Green;
console.log(myColor);

//Interface
interface UserInterface {
  name: string;
  age: number;
  address?: string; // Optional
}
const user: UserInterface = {
  name: "Alice",
  age: 25,
};
interface IDInterface extends UserInterface {
  id: string | number;
  details: UserInterface;
}
const userIdDetails: IDInterface = {
  id: 123,
  name: "Bob",
  age: 30,
  details: {
    name: "Bob",
    age: 30,
  }
};

//Type
type UserType = {
  name: string;
  age: number;
  address?: string; // Optional
};
const user1: UserType = {
  name: "Bob",
  age: 30,
};
type ID = string | number;
const userId: ID = 123; // Can be either string or number


//Classes and Objects
class UserClass {
  name: string;
  age: number;
  address?: string; // Optional
  constructor(name: string, age: number, address?: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
const userobj: UserClass = new UserClass("Sumit", 22);
console.log("class and Constructor:- ", userobj);

class UserStaticClass {
  static getDetails(): string {
    return "Details";
  }
}
console.log("Static Class:- ", UserStaticClass.getDetails());


//Functions
function functionName(a: number, b: (arg: string) => void ): void {
  b("Function Parameter")
}
functionName (1, (arg) => { console.log("Function:- ", arg) })
function restFunction( start: number, ...args: number[]): number {
  return start + args.reduce((a, b) => a + b, 0);
}
var a: number = restFunction(100, 1, 2, 3, 4, 5);
console.log("Rest Parameter Sum:- ", a);


//Generics
//Function Generic
function getArray<T>(items: T[]): void {
  console.log("Generic Function:- ", items);
}
getArray<number>([1, 2, 3, 4]);
getArray<string>(["a", "b", "c"]);
//Interface Generic
interface GenericInterface<T> {
  name: string;
  items: T[];
}
const genericInterface: GenericInterface<number> = {
  name: "Sumit",
  items: [1, 2, 3, 4],
};
console.log("Generic Interface:- ", genericInterface);
//Class Generic
class BottleMaker<T> {
    brand: string;
    other: T;
    constructor(brand: string, other: T) {
        this.brand = brand;
        this.other = other;
    }
}
const bottle1 = new BottleMaker<string>("Coke", "Coke");
const bottle2 = new BottleMaker("Mirinda", true);
console.log("Generic Class:- ", bottle1, bottle2);
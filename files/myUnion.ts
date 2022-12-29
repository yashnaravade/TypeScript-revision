// What is Union?
// With union types, we can combine different types into one. This gives us more flexibility when working with different types, but it also means that we can only access the properties that all types have in common.

// Union types are created with the pipe (|) symbol.
type MyUnion = string | number | boolean;

// We can use union types in the same way as other types.
const myUnion: MyUnion = "Yash Naravade";

// We can also use union types in function parameters and return types.
function getLength(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}

console.log(getLength(42)); // 2
console.log(getLength(myUnion)); // 13

// We can also use union types in arrays.
const myArray: (string | number)[] = ["Hello", 42];

// We can also use union types in objects.
interface MyObject {
  propertyA: string;
  propertyB: number;
  propertyC: boolean;
}

// interface is a type that describes the structure of an object, including its properties.

const myObject: MyObject = {
  propertyA: "Hello",
  propertyB: 42,
  propertyC: true,
};

// Assinging strict values to variables
let pi: 3.14 = 3.14;
let e: 2.71 = 2.71;

// you can not assign any other value to pi or e
// pi = 3.15; // Error
// e = 2.72; // Error
// 
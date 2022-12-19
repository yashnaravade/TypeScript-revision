// type aliases are used to create a new name for a type

// Example of type aliases:

type MyString = string;

function MyString(str: MyString) {
  return str.toUpperCase();
}

console.log(MyString("Hello")); // HELLO

// Q: What is the difference between type aliases and interfaces?
// A: Type aliases can be used to create primitive types, unions, tuples, and any other types that you need to name.

// Q: Why do we need type aliases?  What is the use case?
// A: Type aliases are used to create a new name for a type.  This is useful when you want to give a more descriptive name to a complex type.

type createUser = {
    name: string;
    email: string;
    age: number;
}

function createUser(user: createUser) {
    return user;
}

console.log(createUser({name: "Yash", email: "", age: 21}));


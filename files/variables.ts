let userID = 69;

let userName: string = "John Doe";

let isUserLoggedIn: boolean = true;

// used `tsc variables.ts` to compile the file to JS
// used `ts-node variables.ts` to run the file
// typescript automatically infers the type of the variable if it is not explicitly defined.

userID.toFixed(2); // 69.00

console.log(userName.toUpperCase()); // JOHN DOE
console.log(userID.toFixed(2));

export {};

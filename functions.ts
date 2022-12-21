function add(a: number, b: number) {
  return a + b;
}

console.log(add(34, 35));

function toUpperCase(str: string) {
  return str.toUpperCase();
}

console.log(toUpperCase("hello"));

let sum = function addTwo(a: number, b: number): number {
    // return "Hey GOGO";
  return a + b;
}

// console.log(addTwo(34, 35));
console.log(sum(34, 35));

let addTwo = (a: number): number => {
    return a + 2;
    }

console.log(addTwo(67));

const heroes = ["Ironman", "Spiderman", "Thor", "Captain America"];
// const heroes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

heroes.forEach((hero: String) => {
    // console.log(hero.toUpperCase());
    console.log(hero);
    }
);

const hero = heroes.map((hero: String) => {
    // return hero.toUpperCase();
    return hero;
    }
);

console.log(hero);

function consoleError(message: string): void {
    console.error(message);
}

consoleError("This is an error");

// function handleError(errmsg: string): never {
//     throw new Error(errmsg);
// }
// handleError("This is an error");

// Q: What is the difference between void and never?
// A: void is used to indicate that a function does not return anything.  never is used to indicate that a function does not return anything and also does not terminate.
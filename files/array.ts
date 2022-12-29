const cars: string[] = ['Ford', 'Audi', 'BMW', 'Mercedes', 'Tesla'];
cars.push('Honda');
console.log(cars); // [ 'Ford', 'Audi', 'BMW', 'Mercedes', 'Tesla', 'Honda' ]

// const carMilage: number[] = [10, 20, 30, 40, 50];

const carMilage: Array<number> = [10, 20, 30, 40, 50];
carMilage.push(60);
console.log(carMilage); // [ 10, 20, 30, 40, 50, 60 ]

// const carMilage2: Array<number | string> = [10, 20, 30, 40, 50, '60'];

// array of arrays

const carsByMake: string[][] = [
    ['f150', 'f250'],
    ['corolla'],
    ['camaro']
];

console.log(carsByMake); // [ [ 'f150', 'f250' ], [ 'corolla' ], [ 'camaro' ] ]

// Help with inference when extracting values

const car = cars[0]; // Ford
// const myCar = cars.pop(); // Honda

// Prevent incompatible values

// cars.push(100);

// Help with 'map'

console.log(cars.map((car: string): string => {
    return car.toUpperCase();
}));
 

// Flexible types

const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());

console.log(importantDates); 
//   [
//     2022-12-19T18:22:43.427Z,
//     '2030-10-10',
//     '2030-10-10',
//     2022-12-19T18:22:43.427Z
//   ]

// Q: What is the difference between an array and a tuple?
// A: An array is a collection of values of the same type.  A tuple is a collection of values of different types.




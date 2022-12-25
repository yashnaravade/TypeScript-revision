enum SeatChoice {
    Window,
    Aisle= 69,
    Middle= 2
}


const mySeat = SeatChoice.Window;

console.log(mySeat); // 0
console.log(SeatChoice[0]); // Window

console.log(SeatChoice.Aisle); // 69

const enum SeatChoice2 {
    Window,
    Aisle= 69,
    Middle= 2
}
// Question: What is the difference between enum and const enum?

// Answer: const enum is a compile-time constant enum. It is removed during compilation and replaced by its value. It is used to reduce the size of the output file.

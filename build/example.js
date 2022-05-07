"use strict";
// const add = (a: number, b: number): number => a + b;
// add(10, 20);
// class HoldNumber {
//     data: number = 0;
// }
// class HoldString {
//     string: string = "0";
// }
// const holdNumber = new HoldNumber();
// holdNumber.data = 5;
// const holdString = new HoldString();
class HoldAny {
    constructor(data) {
        this.data = data;
    }
}
const holdNumber = new HoldAny(111);
holdNumber.data = 33;
const holdString = new HoldAny("");
holdString.data = "sadf";

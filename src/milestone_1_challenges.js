//Challenge 1. Return the Sum of Two Numbers
function addition (num1, num2) {
    return num1 + num2;
}
console.log(addition(3,5)); // returns 8
console.log(addition(-6, 9)); // returns 3



//Challenge 2. Convert Minutes into seconds
function convert(minutes) {
    return minutes * 60;
}
console.log(convert(5)); // returns 300
console.log(convert(2)); // returns 120


//Challenge 3: Perimeter of a Rectangle
function findPerimeter(length, width) {
    return 2 * (length + width);
}
let perimeter = findPerimeter(6, 7);
console.log(perimeter); // returns 26
perimeter = findPerimeter(20, 10);
console.log(perimeter); // returns 60


// Challenge 4: Check Negative
function isNegative(num) {
    return num < 0;
}
console.log(isNegative(-23)); // returns true
console.log(isNegative(55)); // returns false






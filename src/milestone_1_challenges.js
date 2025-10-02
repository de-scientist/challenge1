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

//Challenge 5: Can I Drive
function canDrive(name, age) {
    if (age >= 18) {
        return `${name} is old enough to drive.`;
    } else {
        return `${name} is not old enough to drive yet.`;
    }
}
console.log(canDrive("Jane", 22)); // returns Jane is old enough to drive.
console.log(canDrive("June", 12)); // returns June is not old enough to drive yet.

//Challenge 6: Largest Number
function findLargest(a, b, c) {
    return Math.max(a,b,c);
}
console.log(findLargest(5, 9, 3)); // returns 9
console.log(findLargest(10, 10, 10)); // returns 10
console.log(findLargest(-1, -5, -3)); // returns -1

//







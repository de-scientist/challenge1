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

//Challenge 7: BMI Calculator
function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return `Your BMI is ${bmi.toFixed(2)}, you are underweight.`;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return `Your BMI is ${bmi.toFixed(2)}, you have a normal weight.`;
    } else if (bmi >= 25 && bmi < 29.9) {
        return `Your BMI is ${bmi.toFixed(2)}, you are overweight.`;
    } else {
        return `Your BMI is ${bmi.toFixed(2)}, you are obese. `;
    }
}
console.log(calculateBMI(68, 1.75)); // returns Your BMI is 22.20, you have a normal weight.
console.log (calculateBMI(85, 1.8)); // returns Your BMI is 26.23, you are overweight.


//Challenge 8: Greeting Based On Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return `"Good morning, ${name}! have a good day."`;
    } else if (hour >= 12 && hour <= 17) {
        return `"Good afternoon, ${name}! Hope you're having a great day."`;
    } else if (hour >= 18 && hour <= 21) {
        return `"Good evening, ${name}! How was your day?"`;
    } else if (hour >= 22 || hour <= 4) {
        return `"Good night, ${name}! Sleep well."`;
    }
}
console.log(greetUser("Alice", 20)); // returns "Good evening, Alice! How was your day?"


//Challenge 9: FizzBuzz
function fizzBuzzCheck(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return String(number);
    }
}
console.log(fizzBuzzCheck(3)); // returns Fizz
console.log(fizzBuzzCheck(10)); // returns Buzz
console.log(fizzBuzzCheck(15)); // returns FizzBuzz
console.log(fizzBuzzCheck(7)); // returns 7










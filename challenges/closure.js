// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();

// Explanation: 
/* nestedFunction can access "external varibale because it's in a global scope */

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
    let result = 0; // this is accumulator
    for (let i = 0; i <= number; i++) { // loop for each number in a row
        result += i; // 0 = 0 + 0 => 0 = 0 + 1 => 1 = 1 + 2 => 2 = 2 + 3 => 3 = 3 + 4 => loop condition: 4 <= 4 ===> end of loop.
    }
    return result;
}

console.log(summation(4));
//Fizz Buzz Challenge:

var output = [];
var count = 1;

// ** The order of the IF  statements matter! ** 
// The joint IF condition (count % 3 && count % 5) needs to come first,
// otherwise the individual IF conditions would be met and the function
// would never get to the double condition that checks for both.

function fizzbuzz() {
if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
} else if (count % 3 === 0) {
    output.push("Fizz");
} else if (count % 5 === 0) {
    output.push("Buzz");
} else {
    output.push(count);
}

count++;

    console.log(output);
}

fizzbuzz();

// Re-factoring using a WHILE Loop:

var output = [];
var count = 1;

function fizzbuzz() {
    while(count <= 100) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }

    count++;
    }
    console.log(output);
}

fizzbuzz();

// Using a FOR Loop: 
var output = [];

function fizzbuzz() {
    for(var count = 1; count <= 100; count++) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
        }
    }
    console.log(output);
}

fizzbuzz();


// Reversing the count using a FOR Loop:

var output = [];

function fizzbuzz() {
    for(var count = 100; count >= 1; count--) {
    
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
        }
    }
    console.log(output);
}

fizzbuzz();
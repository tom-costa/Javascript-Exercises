// Using IF Statements:

function fibonacciGenerator(n) {
    var output = [];

    if(n === 1){
        output = [0];
    } else if (n === 2){
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++ ){
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;

}
output = fibonacciGenerator(10);
console.log(output);

// Using a For Loop:
function fibonacciGenerator(n) {
    var output = [0, 1]
    for(let i = 2; i<=n; i++){
        let a = output[i - 1];
        let b = output[i - 2];

        output.push(a + b)
    }
    return output[n];
}
fibonacciGenerator(10);

// Recursive method (function calls itself inside the code):

function fibonacciGenerator(n) {
    if (n<2){
        return n;
    }
    return fibonacciGenerator(n - 1) + fibonacciGenerator(n - 2);
}
console.log(fibonacciGenerator(10));
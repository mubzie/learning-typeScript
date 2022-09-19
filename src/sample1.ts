const multiply = (a, b, printText) => {
    console.log(printText, a * b);
}

const multiply2 = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

// using the first multiply function(multiply), the 2 function calls will work without throwing any error. 
// seems like the code was written in javascript, but not really.
// this happens because typescript "infer" the parameter as "type: any". 
multiply(4,5, 'the answer is:');
multiply('can we multiply a string', 4, 'Multiplied a string and 4, the result is:');

// the second function(multiply2) is a properly typed typescript code and will throw an error if you try to use a "string"
// in place of a "number"
multiply2(4,5, 'the answer is:');
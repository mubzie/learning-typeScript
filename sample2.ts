type Operation = 'multiply' | 'divide' | 'add';

const calculator = (a: number, b: number, operator: Operation) => {
    if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'divide') {
        if (b === 0) return 'input valid number'
        return a / b;
    } else {
        return a + b;
    }
}

calculator(1, 0, 'divide');


// using typescript to determine expected return value
// instead of explicitly specifying the return type, you can make a "type alias" like 
// this one: type Result = "number" | "string"
const calculator2 = (a: number, b: number, operator: Operation): number | string => {
    if (operator === 'multiply') {
        return a * b;
    } else if (operator === 'divide') {
        if (b === 0) return 'input valid number'
        return a / b;
    } else {
        return a + b;
    }
}

calculator(1, 3, 'add');
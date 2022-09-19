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
    switch (operator) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0) throw new Error('enter valid number');
            return a / b;
        case 'add':
            return a + b;
        default:
        throw new Error('operation is not multiply or divide or add')
    }
}

try {
    console.log(calculator2(2, 0, "divide"))
} catch (error: unknown ){
    let errorMessage = "something went wrong";
    if (error instanceof Error) {
        errorMessage += ' Error:' + error.message
    }
    console.log(errorMessage)
}
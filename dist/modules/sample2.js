"use strict";
const calculator = (a, b, operator) => {
    if (operator === 'multiply') {
        return a * b;
    }
    else if (operator === 'divide') {
        if (b === 0)
            return 'input valid number';
        return a / b;
    }
    else {
        return a + b;
    }
};
calculator(1, 0, 'divide');
const calculator2 = (a, b, operator) => {
    switch (operator) {
        case 'multiply':
            return a * b;
        case 'divide':
            if (b === 0)
                throw new Error('enter valid number');
            return a / b;
        case 'add':
            return a + b;
        default:
            throw new Error('operation is not multiply or divide or add');
    }
};
try {
    console.log(calculator2(2, 0, "divide"));
}
catch (error) {
    let errorMessage = "something went wrong";
    if (error instanceof Error) {
        errorMessage += ' Error:' + error.message;
    }
    console.log(errorMessage);
}
//# sourceMappingURL=sample2.js.map
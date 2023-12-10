export function infixToPostfix(infixExpression) {
    console.log(infixExpression);
    const operators = {
        '&': 1,
        '|': 1
    };

    const isOperator = (char) => operators.hasOwnProperty(char);
    const getPrecedence = (operator) => operators[operator];

    const outputQueue = [];
    const operatorStack = [];

    infixExpression.split('$').forEach((token) => {
        if (/[a-zA-Z0-9]/.test(token)) {
            // Operand, enqueue to output
            outputQueue.push("[" + token + "]");
        } else if (isOperator(token)) {
            // Operator
            while (
                operatorStack.length &&
                getPrecedence(operatorStack[operatorStack.length - 1]) >= getPrecedence(token)
            ) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        } else if (token === '(') {
            // Left parenthesis, push to stack
            operatorStack.push(token);
        } else if (token === ')') {
            // Right parenthesis, pop from stack to output until left parenthesis is encountered
            while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop(); // Pop the left parenthesis
        }
    });

    // Pop any remaining operators from the stack to the output
    while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
    }
    console.log(outputQueue.join(''));
    return outputQueue.join('');
}

console.log(infixToPostfix('12$&$5'))
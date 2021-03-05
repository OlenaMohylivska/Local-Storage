function myCalculator() {
    try {
        const expression = prompt('Enter your expression', '1 + 2');
        const result = eval(expression);

        if (isNaN(result)) {
            const eNan = new Error('Result is not a number!');
            throw eNan;
        } else if (result === Infinity) {
            const infinity = new Error('Did you divide to 0?');
            throw infinity;
        } else if (result === null) {
            alert('You denied action!');
        }

        return result !== null ? alert(`Result of your expression: ${result}!`) : '';

    } catch (e) {
        if (e instanceof ReferenceError || e instanceof SyntaxError) {
            alert('Entered expression is not valid');
        } else {
            alert(e.message);
        }

        return myCalculator();
    }
}
myCalculator();
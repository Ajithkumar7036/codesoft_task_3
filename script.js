document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.textContent = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                operator = '';
                previousInput = '';
                display.textContent = '0';
            } else if (value === '=') {
                if (previousInput && currentInput && operator) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    operator = '';
                    previousInput = '';
                }
            } else {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            }
        });
    });
});

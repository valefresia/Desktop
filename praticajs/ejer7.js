let num1 =parseInt(prompt('ingresa un numero '));
let num2 =parseInt(prompt('ingresa un numero '));
let num3 =parseInt(prompt('ingresa un numero '));

if (num1 >= num2 && num1 >= num3) {
    document.write(`El ${num1} es el número más grande`);
} else if (num2 >= num1 && num2 >= num3) {
    document.write(`El ${num2} es el número más grande`);
} else {
    document.write(`El ${num3} es el número más grande`);
}
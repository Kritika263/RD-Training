function add(number1, number2) {
    return number1 + number2;
}
function sub(number1, number2) {
    return number1 - number2;
}
function mul(number1, number2) {
    return number1 * number2;
}
function div(number1, number2) {
    return number1 / number2;
}
function calculate(operation, number1, number2) {
    return operation(number1, number2);
}
let ansAftercalculation = calculate(div, 20, 2);
console.log(ansAftercalculation);
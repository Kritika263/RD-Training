 const numbers={
    Zero:0,
   One:1,
   Two:2,
   Three:3,
   Four:4,
   Five:5,
   Six:6,
   Seven:7,
   Eight:8,
   Nine:9

}


function process(number, operator) {
    if (!operator) return number;
    return operator(number);
}
function zero(operator = null) {
    return process(numbers.Zero, operator)
} function one(operator = null) { return process(numbers.One, operator) }
function two(operator = null) { return process(numbers.Two, operator) }
function three(operator = null) { return process(numbers.Three, operator) }
function four(operator = null) { return process(numbers.Four, operator) }
function five(operator = null) { return process(numbers.Five, operator) }
function six(operator = null) { return process(numbers.Six, operator) }
function seven(operator = null) { return process(numbers.Seven, operator) }
function eight(operator = null) { return process(numbers.Eight, operator) }
function nine(operator = null) { return process(numbers.Nine, operator) }
function plus(leftOperand) {
    console.log(leftOperand)
    return function (rightOperand) {        // console.log(rightOperand)      
        return rightOperand + leftOperand;
    }
}
function minus(leftOperand) {
    return function (rightOperand) {
        return rightOperand - leftOperand;
    }
} function times(leftOperand) {
    return function (rightOperand) {
        return rightOperand * leftOperand;
    }
} function dividedBy(leftOperand) {
    return function (rightOperand) {
        return rightOperand / leftOperand;
    }
}// console.log(nine(plus(nine())))console.log(three(times(nine())))
console.log(nine(plus(eight())))
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function calculate(op, x, y) {
    return op(x, y);
}
let ans = calculate(div, 20, 2);
console.log(ans);
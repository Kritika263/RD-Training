const addOne = (num1) => num1 + 1
const multThree = (num2) => num2 * 3
function compose(f, g) {
    return function (...args) {
        return f(g(...args));
    };
}
const addOneMultThree = compose(addOne, multThree);
console.log(addOneMultThree(5));

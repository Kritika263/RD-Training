const addOne = (num1) => num1 + 1
const multThree = (num2) => num2 * 3
const subTwo = (num3) => num3 - 2
const divideTwo = (num4) => num4 / 2
function compose(...args) {
    return function (input) {
        return args.reduceRight((currvalue, func) => func(currvalue), input);
    };
}
const addOneMultTwoaddFive = compose(multThree, addOne, subTwo, divideTwo);
console.log(addOneMultTwoaddFive(5)); 

//Problem Statememnt- This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
const numbers = [1, 2, 3, 4, 5];
Array.prototype.square = function () {
    return numbers.map((index) => {
        return index * index;
    })
};
Array.prototype.cube = function () {
    return numbers.map((index) => {
        return index * index * index;
    })
};
Array.prototype.sum = function () {
    return numbers.reduce((sumofvalues, currvalue) => {
        return sumofvalues + currvalue;
    }, 0)
}
Array.prototype.average = function () {
    return this.sum() / numbers.length;
}
Array.prototype.even = function () {
    return numbers.filter((currIndex) => {
        if (currIndex % 2 == 0)
            return currIndex;
    })
}
Array.prototype.odd = function () {
    return numbers.filter((currIndex) => {
        if (currIndex % 2 != 0)
            return currIndex;
    })
}
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(numbers.odd());

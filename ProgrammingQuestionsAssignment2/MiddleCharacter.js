const numbers = {
    One: 1,
    Two: 2
}
function getMiddle(inputstr) {
    if (inputstr.length % numbers.Two === 0) {
        return inputstr.substr(inputstr.length / numbers.Two - numbers.One, numbers.Two);
    }
    else {
        return inputstr.charAt(Math.floor(inputstr.length / numbers.Two));
    }
}
console.log(getMiddle("testa"));
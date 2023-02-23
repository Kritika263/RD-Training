// We want to create a function that will add numbers together when called in succession.

// add(1)(2); // == 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // == 6
// add(1)(2)(3)(4); //  == 10
// add(1)(2)(3)(4)(5); // == 15
// and so on.
function add(num1) {
    function inner(num2) {

        return add(num1 + num2);
    };
    inner.valueOf = function () {
        return num1;
    };
    return inner;

}
console.log(add(1)(2)(3).valueOf());

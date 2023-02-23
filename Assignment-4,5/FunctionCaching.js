function cache(fn) {
    const map = {};
    return function () {
        const key = JSON.stringify(arguments);
        if (key in map) {
            return map[key];
        }
        map[key] = fn(...arguments);
        return map[key];
    }
}
const fn = cache(function (num1, num2, num3) {
    return num1 + num2 + num3;
})
console.log(fn(1, 2, 3));
console.log(fn(1, 2, 3));
console.log(fn(1, 2, 1));

function shuffleArray(arr) {
    for (let index = 0; index < arr.length; index++) {
        const result = Math.floor(Math.random() * arr.length);
        [arr[index], arr[result]] = [arr[result], arr[index]];
    }
    console.log(arr);
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffleArray(inputArray);










function shuffleArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
}
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
shuffleArray(myArray);










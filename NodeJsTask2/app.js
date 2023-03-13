const operation = process.argv[3];
const inputArray = process.argv.slice(4).map(Number);
let ans;
switch (operation) {
  case "addition":
    if (inputArray.length >= 2) {
      ans = inputArray.reduce((curr, prev) => {
        curr += prev;
        return curr;
      }, 0);
      console.log(ans);
    } else {
      console.error("Invalid number of values");
    }
    break;
  case "multiplication":
    if (inputArray.length >= 2) {
      let ans = inputArray.reduce((curr, prev) => {
        curr *= prev;
        return curr;
      }, 1);
      console.log(ans);
    } else {
      console.error("Invalid number of values");
    }
    break;
  case "subtraction":
    if (inputArray.length == 2) {
      let ans = inputArray[0] - inputArray[1];
      console.log(ans);
    } else {
      console.error("There must be 2 input values");
    }
    break;
  case "division":
    if (inputArray.length == 2 && inputArray[1] != 0) {
      let ans = inputArray[0] / inputArray[1];
      console.log(ans);
    } else {
      if (inputArray.length != 2) console.error("There must be 2 input values");
      else if (inputArray[1] == 0) console.error("Provide valid values");
    }
    break;
  default:
    console.log("Invalid operation");
}

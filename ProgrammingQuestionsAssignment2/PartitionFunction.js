let itemsarray = [1, 2, 3, 4, 5, 6];
function isEven(input) { return input % 2 == 0 }
let newindex = partitionOn(isEven, itemsarray);
console.log(newindex);
function partitionOn(operation, items) {
    let arrTrue = [];
    let arrFalse = [];
    for (let index = 0; index < itemsarray.length; index++) {
        if (isEven(itemsarray[index])) arrTrue.push(itemsarray[index]);
        else arrFalse.push(itemsarray[index]);
    }
    console.log(arrTrue);
    console.log(arrFalse);
    // itemsarray = arrFalse.concat(arrTrue);
    itemsarray=[...arrFalse,...arrTrue];
    console.log(itemsarray);
    return arrFalse.length;
}
//Problem Statement - You are given a complex object that has many deeply nested variables. 
// You don't want to go the usual if obj.property == null route.
//  Create a prototype method that given a nested path, either return the value or undefined.
// var obj = {
//   person: {
//     name: 'joe',
//     history: {
//       hometown: 'bratislava',
//       bio: {
//         funFact: 'I like fishing.'
//       }
//     }
//   }
// };

// obj.hash('person.name'); // 'joe'
// obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
// obj.hash('person.history.homeStreet'); // undefined
// obj.hash('person.animal.pet.needNoseAntEater'); // undefined

const obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};
Object.prototype.hash = function (inputstring) {
    let currentObj = this;
    const propertyArray = inputstring.split('.');
    for (let value of propertyArray) {
        if (currentObj[value]) {
            currentObj = currentObj[value];
        }
        else
            return undefined;
    }
    return currentObj;
}
console.log(obj.hash('person.name'));
console.log(obj.hash('person.history.bio')); 

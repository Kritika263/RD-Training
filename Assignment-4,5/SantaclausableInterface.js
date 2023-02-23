// Rules
// The SantaClausable interface is implemented, if all of the following methods are defined on an object:

// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney
// Example
// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };

// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
//     // no distributeGifts() and no goDownTheChimney()
// };

// isSantaClausable(santa); // must return TRUE
// isSantaClausable(notSanta); // must return FALSE
const santa = {
    sayHoHoHo: function () { console.log('Ho Ho Ho!') },
    distributeGifts: function () { console.log('Gifts for all!'); },
    goDownTheChimney: function () { console.log('*whoosh*'); }
};

const notSanta = {
    sayHoHoHo: function () { console.log('Oink Oink!') }
};
const desiredproperties = ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'];
function isSantaClausable(inputobject) {
    for (let index = 0; index < 3; index++) {
        if (!inputobject.hasOwnProperty(desiredproperties[index]))
            return false;
    }
    return true;
}
console.log(isSantaClausable(santa));
console.log(isSantaClausable(notSanta));

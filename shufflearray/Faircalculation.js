 const numbers ={
    Three : 3,
    Seven : 7,
    Forty : 40,
    Twenty : 20
 }

class Fair {
    constructor(days) {
        this.days = days;
    }
    dailycharges(days) {
        return days * numbers.Forty;
    }
    totalfair(days) {
        if (days < numbers.Three) {
            return this.dailycharges(days);
        }
        else if (days >=numbers.Three  && days < numbers.Seven) {
            return this.dailycharges(days) - numbers.Twenty

        }
        else if (days >= numbers.Seven) {
            return this.dailycharges(days) - numbers.Forty;
        }
    }
}
let days;
const fair = new Fair()
let ans = fair.totalfair(2);
console.log(ans);
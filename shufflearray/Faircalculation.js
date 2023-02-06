class Fair {
    constructor(x) {
        this.x = x;
    }
    dailycharges(x) {
        return x * 40;
    }
    totalfair(x) {
        if (x < 3) {
            return this.dailycharges(x);
        }
        else if (x >= 3 && x < 7) {
            return this.dailycharges(x) - 20

        }
        else if (x >= 7) {
            return this.dailycharges(x) - 40;
        }
    }
}
let x;
const fair = new Fair()
let ans = fair.totalfair(5);
console.log(ans);
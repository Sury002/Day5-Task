class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

const calculator = new UberPriceCalculator(5, 0.5, 1.5);
const distance = 30; 
const time = 50; 
const totalPrice = calculator.calculatePrice(distance, time);
console.log("Total Price:", totalPrice);
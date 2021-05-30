class Emission {
  carEmissionCoefficient = 100;
  trainEmissionCoefficient = 40;
  bikeEmissionCoefficient = 5;

  constructor(dailyTravel) {
    this.carDistance = dailyTravel.carDistance;
    this.bikeDistance = dailyTravel.bikeDistance;
    this.trainDistance = dailyTravel.trainDistance;
  }

  calculateBikeEmission() {
    return this.bikeEmissionCoefficient * this.bikeDistance;
  }
  calculateTrainEmission() {
    return this.trainEmissionCoefficient * this.trainDistance;
  }
  calculateCarEmission() {
    return this.carEmissionCoefficient * this.carDistance;
  }

  calculateDailyTotalEmission() {
    return {
      "bike emission": this.calculateBikeEmission(),
      "train emission": this.calculateTrainEmission(),
      "car emission": this.calculateCarEmission(),
    };
  }
}

module.exports = Emission;
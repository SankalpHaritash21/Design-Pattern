class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.model}`;
  }

  clone() {
    return new Car(this.model, this.year);
  }
}

// Create an instance of Car
const car1 = new Car("Honda Civic", 2020);
console.log(car1.getInfo()); // Output: 2020 Honda Civic

// Clone car1
const car2 = car1.clone();
console.log(car2.getInfo()); // Output: 2020 Honda Civic

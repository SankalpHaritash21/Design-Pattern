// Abstract Product
class Vehicle {
  constructor(name) {
    this.name = name;
  }

  drive() {
    console.log(`${this.name} is being driven.`);
  }
}

// Concrete Products
class Car extends Vehicle {
  constructor() {
    super("Car");
  }
}

class Truck extends Vehicle {
  constructor() {
    super("Truck");
  }
}

// Abstract Creator
class VehicleFactory {
  createVehicle() {
    throw new Error("createVehicle() must be implemented by subclasses");
  }
}

// Concrete Creators
class CarFactory extends VehicleFactory {
  createVehicle() {
    return new Car();
  }
}

class TruckFactory extends VehicleFactory {
  createVehicle() {
    return new Truck();
  }
}

// Client
const carFactory = new CarFactory();
const car = carFactory.createVehicle();
car.drive(); // Output: Car is being driven.

const truckFactory = new TruckFactory();
const truck = truckFactory.createVehicle();
truck.drive(); // Output: Truck is being driven.

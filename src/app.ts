// intersection-types
// TOKNOW: allows to combines another types IE:

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
  name: 'Agucho',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric


// type-guards
// TOKNOW: They're more used. They're just a term that describes the idea o the approach of checking if
// a certain property or method exists before to tries of using it. IE:

function add(a: Combinable, b: Combinable) {
  //Explain: Because we have out type Combinable, we can receive such as a string or a number
  // but we can't return a sum for a string. Ts tell us that thats wrong, so if we check the type, we could say that this is a
  // type-guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({name: "Agucho", startDate: new Date()});

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number){
    console.log('Loading cargo...' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1)
useVehicle(v2)

// Discriminated unions
// TOKNOW: its a pattern that you could use with union-types which makes easier the implementation of
// guard-types. It's only available when you work with object types!!

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  /* if ('fliyingSpeed' in animal) {
    console.log('Moving with speed: ' + animal.fliyingSpeed)
  } */
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
      case 'horse':
        speed = animal.runningSpeed
  }
  console.log('Moving with speed: ' + speed)
}

moveAnimal({type: 'bird', flyingSpeed: 10})
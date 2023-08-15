// TOKNOW: A interface describe the structure of an object. We can use it to define how it looks like an object
// an interface is more like a contract
// TOKNOW: What is the difference between a custom @type vs a @interface? You can use it as equal (it'll compile 
// without errors, when you define a interface is more clearer because you let to known that you only wants to 
// define the structure of an object with that, also you can use interfaces inside of a class)
interface Greetable {
  name: string;

  greet(phrase: string): void;
}
class Person implements Greetable {
  name: string;
  age = 30
  constructor(n:string) {
    this.name = n
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }
}


let user1: Person;

user1 = new Person('Agucho')

user1.greet('Hi there - I am')
console.log(user1)
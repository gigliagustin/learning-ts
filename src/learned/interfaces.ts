// TOKNOW: A interface describe the structure of an object. We can use it to define how it looks like an object
// an interface is more like a contract
// TOKNOW: What is the difference between a custom @type vs a @interface? You can use it as equal (it'll compile 
// without errors, when you define a interface is more clearer because you let to known that you only wants to 
// define the structure of an object with that, also you can use interfaces inside of a class)

interface AddFn {
  (a: number, b: number): number
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2
};

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  name?: string;

  greet(phrase: string): void;
}
class Person implements Greetable {
  name?: string;
  age = 30
  constructor(n?:string) {
    if (n) {
      this.name = n;
    };
  };

  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi!');
    };
  };
};


let user1: Greetable;

user1 = new Person('Agucho');

user1.greet('Hi there - I am');
console.log(user1);
class Department {
  /* TOKNOW: in TS we can handle with two types of properties, private and public, the last one is a default value. 
  E.G: if you're working on a big team, you could use a /private/ class just to clarify at the team that theres only one way to access to certain class property.*/
  // private readonly id: string;
  // privatename:  string;
  private employees: string[] = [];
  // TOKNOW: We dont need to make a doble initialization of our constructor, we can have this like a refactor of our code writing down (in the constructor) the properties that we are going to need.
  // TOKNOW: Readonly property it's a typescript property, just like private and public. His objective is to add some extra security on our code assugirng that THAT property, cannot be modified. It can only be initialized once, and them, TS won't let you overwrite it anymore. Of course, if we compilate this code, it won't fail, because is TS.
  constructor(private readonly id: string, public name: string) {
    // this.name = n
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
}

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

const accounting = new Department('d1', 'Accounting')

accounting.addEmployee('Ani')
accounting.addEmployee('Agucho')
accounting.describe()


accounting.printEmployeeInformation()

/* const accountingCopy = {name: 'DUMMY', describe: accounting.describe }

accountingCopy.describe() */
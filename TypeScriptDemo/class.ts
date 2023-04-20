class Employee {
  #id: number;

  protected name: string;

  address: string;

  get empId(): number {
    return this.#id;
  }

  set empId(id: number) {
    this.#id = id;
  }

  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.address = address;
    this.#id = id;
    this.name = name;
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "John", "Highway 71");

john.empId = 100;

console.log(john.empId);

// Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
}

let address = john.getNameWithAddress();

console.log(john, address);

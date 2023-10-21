class person {
  constructor(_name, _age, _height) {
    this.name = _name;
    this.age = _age;
    this.height = _height;
  }
  getarea() {
    return this.x;
  }
}

const person1 = new person("amir", 18, 180);
const person2 = new person("amir", 18, 180);
console.log(person1);

class rectangle {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  getarea() {
    return this.x * this.y;
  }
}

const rec1 = new rectangle(2, 3);
console.log(rec1.getarea());

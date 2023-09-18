class Key {
  constructor(private signature: number = Math.random()) {}

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
  }

  public comeIn(tenant: Person) {
    this.tenants.push(tenant);
  }
}

class MyHouse extends House {
  public openDoor(isOpen: object) {
    if (isOpen === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

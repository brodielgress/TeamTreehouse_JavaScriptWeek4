'use strict';

class Person {
  dance() {
    const dances = [
      'waltz',
      'tango',
      'mambo',
      'foxtrot'
    ];
    console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
  }
  constructor({ name, age, eyeColor = 'brown' } = {}) {
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
  }
}

class Student extends Person {
    dance (traditional) {
        if(traditional) {
            super.dance();
            return;
        }
        const dances = [
            'kabuki',
            'kathak',
            'kekak',
            'dabke',
            'gopak',
            'tinikling'
          ];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
    }
    constructor({ name, age, interestLevel = Math.floor(Math.random() *10)+1 } = {} ) {
        super({ name, age });
        this.name = name;
        this.age = age;
        this.interestLevel = interestLevel;
        this.grades = new Map;
    }
}

let stevenJ = new Student({ name: 'Steven', age: 22});
stevenJ.dance(false);
console.log('Interest level:', stevenJ.interestLevel);
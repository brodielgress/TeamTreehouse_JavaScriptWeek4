'use strict';

let classroom = new Set();

let stevenJ = {name: 'Steven', age: 22 },
    sarah = { name: 'Sarah', age: 23 },
    stevenS = {name: 'Steven', age: 22 };

classroom.add(stevenJ);
classroom.add(sarah);
classroom.add(stevenS);
classroom.add(sarah);

if (classroom.has(stevenJ)) console.log('Steven J. is in the classrom');
if (classroom.has(sarah)) console.log('Sarah is in the classroom');
if (classroom.has(stevenS)) console.log('Steven S. is in the classroom');

console.log('classroom size:', classroom.size);
classroom.delete(stevenJ);
console.log('classroom size:', classroom.size);

// Create an array of students from the classroom set
let arrayOfStudents = Array.from(classroom);
console.log(arrayOfStudents);

// Create a set from an existing array
let alumni = new Set(arrayOfStudents);
console.log('alumni size', alumni.size);

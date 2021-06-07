'use strict';

function greet(name = 'Brodie', timeOfDay = 'Day') {
    console.log(`Good ${timeOfDay}, ${name}!`);
}

greet(undefined, 'afternoon');
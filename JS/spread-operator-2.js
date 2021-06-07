'use strict';

function myFunction (name, iceCreamFlavor) {
  console.log(`${name} really likes ${iceCreamFlavor} ice cream.`)
}

let args = ['Gabe', 'vanilla'];
myFunction(...args);
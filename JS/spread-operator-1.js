'use strict';

const originalFlavors = ['Chocolate', 'Vanilla', 'Mint'];

const newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Sherbet'];

const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);
import foods from './foods';
import {choice, remove} from './helpers';

//Randomly draw a fruit from the array
let fruit = choice(foods);
// Log the message
console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);

//remove the fruit from the array of fruit
let remaining = remove(foods, fruit);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);
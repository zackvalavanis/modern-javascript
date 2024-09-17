var moment = require('moment');

console.log('Hello all!');
var datetime = moment().format('llll');
console.log(datetime);

import { sqrt } from 'mathjs'

console.log(sqrt(4).toString()) // 2

var number = 5;

switch(number) { 
  case 5: 
    console.log('thats too low!');
  break;
  case 6:
    console.log('this is exactly 6');
  break;
  case 7: 
    console.log('thats too high');
  break;
  default: 
    console.log('try again!')
}

var num = 9;

if(num > 3) { 
  console.log('thats larger that 3');
} else if(number < 6) { 
  console.log('thats smaller than 6');
}else console.log('try again');
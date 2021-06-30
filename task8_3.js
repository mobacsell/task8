'use strict';

const str = 'Hello';
let newStr = '';

for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - 1 - i];
}

console.log(newStr);
'use strict';

const arr = [1, 2, 3, 4, 5, 7, 0, 0, 0, 'str', null, undefined, [1, 3], {a: 3, b: 5}];

let evenQuantity = 0,
    oddQuantity = 0,
    zeroQuantity = 0;

arr.forEach((item, index) => {
    if (typeof item === 'number' && item !== 0 && item !== NaN) {
        if((item % 2) === 0) {
            evenQuantity++;
        } else {
            oddQuantity++;
        }
    } else if (item === 0) {
        zeroQuantity++;
    }
});

console.log(`Четных чисел в массиве: ${evenQuantity}`);
console.log(`Нечетных чисел в массиве: ${oddQuantity}`);
console.log(`Количество нулей в массиве: ${zeroQuantity}`);



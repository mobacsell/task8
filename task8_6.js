'use strict';

const arr = ['ivan', 'ivan', 'ivan', 'ivan', 'ivan', 'ivan'];
let result;

result = arr.reduce((temp, item) => {
    if (temp === item) {
        temp = item;
    } else {
        temp = undefined;
    }
    return temp;
});

if (result === undefined) {
    console.log('В массиве разные элементы');
} else {
    console.log('Все элементы массива одинаковые');
}
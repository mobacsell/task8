'use strict';

const X = 123;

switch (typeof X) {
    case ('number'):
        console.log(`${X} - число`);
        break;
    case ('boolean'):
        console.log(`${X} - булевое значение`);
        break;
    case ('string'):
        console.log(`${X} - строковое значение`);
        break;
    default:
        console.log(`Тип данных ${X} не определен`)
}
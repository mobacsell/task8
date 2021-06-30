'use strict';

const employee = new Map([
    ['name', 'Ivan'],
    ['position', 'engeneer'],
    ['access', 'private'],
    ['married', true],
    [1, true]
]);

for (let item of employee) {
    console.log(`Ключ - ${item[0]}, значение - ${item[1]}`);
}



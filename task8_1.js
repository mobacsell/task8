'use strict';

const input = +prompt('Введите значение');

if (typeof input === 'number') {
    if (input !== NaN && (input % 2) === 0) {
        console.log('Вы ввели четное число');
    } else if (input != NaN && (input % 2) === 1) {
        console.log('Вы введи нечетное число');
    } else {
        console.log('Упс, кажется, вы ошиблись');
    } 
} else {
    console.log('Преобразование типа не осуществленно');
}
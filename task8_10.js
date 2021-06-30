'use strict';

function checkPrimeNumber(num) {
    let s = 0;
    if (num > 1000) {
        console.log('Введенное число больше 1000');
    } else if (num === 0) {
        console.log('0 не является ни простым, ни составным числом');
    } else if (num === 1) {
        console.log('1 не является ни простым, ни составным числом');
    }
    
    if (num > 1) {
        for (let i = 2; i <= (num/2); i++) {
            if (num % i === 0) {
                s++;
            } 
        }
    }

    if (s > 0 && num > 1) {
        console.log(`Число ${num} является составным числом`);
    } else if (s === 0 && num > 1) {
        console.log(`Число ${num} является простым числом`);
    }
}

checkPrimeNumber(997);
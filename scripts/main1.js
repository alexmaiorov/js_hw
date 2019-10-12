//Задание 1
console.log('Задание 1');
console.log(conversion(+prompt('Введите число в диапазоне 0..999')));

function conversion(num){
    let obj = {};
    if (isNaN(num) || num < 0 || num > 999){
        console.log('Error. Введите число в диапазоне [0..999]');
    } else {
        obj['единицы'] = num % 10;
        obj['десятки'] = ((num - obj['единицы']) % 100) / 10;
        obj['сотни'] = Math.floor(num/100);
    }
    return obj;
}

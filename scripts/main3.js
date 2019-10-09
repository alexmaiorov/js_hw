//Задание 3
var number = getRandomInRange(1000, 9999);
console.log(guessing(number));

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessing(num){
    let a = prompt('Сделайте попытку'),
        b = '';
    if (!a || isNaN(a)) {
        return b = 'надо вводить число!!';
    } else if (a < num) {
        console.log('Вы не правы, загаданное число больше чем ' + a);
        return guessing(num);
    } else if (a > num){
        console.log('Вы не правы, загаданное число меньше чем ' + a);
        return guessing(num);
    } else {
        return b = 'вы правы, это действительно число ' + num;
    }
}
//Задание 3
var obj  =  {
    камень : ['ножницы', 'ящерица'],
    ножницы: ['бумага', 'ящерица'],
    бумага: ['камень', 'спок'],
    ящерица: ['бумага', 'спок'],
    спок: ['ножницы', 'камень']
    };

var userGuess = prompt('Сделайте выбор (текстом): камень, ножницы, бумага, ящерица, спок?');
var computerGuess = compGuessing();
console.log('Выбор компьютера: ' + computerGuess);
compare(userGuess, computerGuess, obj);

function compGuessing(){
    let arr = ['камень', 'ножницы', 'бумага', 'ящерица', 'спок']
    let i = Math.floor(Math.random()*5);
    return arr[i];
}

function compare(user, computer, object){
    if(computer == user){
        console.log('Ничья');
    }else if(object[user] === undefined){
        console.log('Некорректный ввод данных');
    }else{
        var victory = object[user].indexOf(computer) > -1;
        (victory) ? console.log('Вы победили! ' + user + ' бьет ' + computer) : console.log('Вы проиграли ' + computer + ' бьет ' + user);
    }
}
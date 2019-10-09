//Задание 2
var basket = [
    ['yokohama', 100],
    ['triangle', 50],
    ['toyo', 200]
]

console.log('Задание 2\n' + 'Итоговая стоимость:' + countBasketPrice(basket));

function countBasketPrice(arr){
    var total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i][1];
    }
    return total;
}
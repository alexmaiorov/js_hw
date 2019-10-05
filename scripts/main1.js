//Задание 1
var arr = [],
    num = 2;
while ( num <= 100) {
    if (isSimple(num)) arr.push(num);
    num++;
}
console.log('Задание 1\n' + arr);

function isSimple(number){
    for(let i = 2; i <= number/2; i++){
        if (number % i ===0) return (false); 
    }
    return (true);
}
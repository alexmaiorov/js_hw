//Задание 2
const NAMES = ['Yokohama', 'TOYO', 'Triangle', 'Continental', 'Pirelli', 'Michelin', 'Nokian'];
const PRICES = [6740, 7570, 4150, 9650, 8410, 10350, 4470];

let store = {
    catalog: [],
    cart: [],
    sum: 0,
    
    createDTO: function(){
        for(let i = 0; i < NAMES.length; i++){
            this.catalog.push (this.createProduct(NAMES[i], PRICES[i], i));
        }
    },
    createProduct: function(name, price, j){
        return {
            id: j+1,
            name: name,
            price: price
        }
    },
    SumPrice: function(){
        for (let el of this.catalog){
            this.sum += el.price;
        }
    }
}
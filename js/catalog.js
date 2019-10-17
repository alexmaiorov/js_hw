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
    createHTMLprod: function(){
        let products = document.querySelector('.products');
        let str = '';
        for (let el of this.catalog){
            str += '<div class="products-item">'
            str += `<img class="products-item-img src="" alt="img" width="200" height="150">`
            str += `<span class="products-item-name">${el.name}</span>`
            str += `<span class="products-item-price">${el.price.toLocaleString()}&#8381;</span>`
            str += `<button class="btn" onclick="putInCart(this)" data-id="${el.id}">Купить</button>`
            str += '</div>'
        }
        products.innerHTML = str;
    }
}
store.createDTO();
store.createHTMLprod();
let cartCatalog = document.querySelector('.cart');
cartCatalog.addEventListener("mouseenter", showCart, false);
cartCatalog.addEventListener("mouseleave", hideCart, false);
function putInCart(btn){
    let id = btn.getAttribute('data-id');
    store.cart.push (store.catalog[id-1]);
    btn.innerText = 'добавлено';
    btn.classList.add("btn-active");
    btn.disabled = true;
    let cart = document.querySelector('.cart-logo');
    cart.innerText = store.cart.length;
    store.sum += store.catalog[id-1].price;
    document.querySelector('.cart-count-price').innerHTML = `${store.sum}&nbsp;&#8381;`;
}
function showCart(){
    let cart = document.querySelector('.cart-list');
    let str = '';
    if (store.cart.length > 0) {
        cart.style.display = 'block';
        for (let el of store.cart){
            str += '<li class="cart-list-item">'
            str += `<span class="cart-name">${el.name}:</span>`
            str += `<span class="cart-price">${el.price}&nbsp;&#8381;</span>`
            str += '</li>'
        } 
        cart.innerHTML = str;
    } else return false;
}
function hideCart(){
    let cart = document.querySelector('.cart-list');
    if (store.cart.length > 0) {
        cart.style.display = 'none'
    } else return false;
}
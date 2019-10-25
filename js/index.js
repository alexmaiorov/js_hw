const NAMES = ['Yokohama', 'TOYO', 'Triangle', 'Continental', 'Pirelli', 'Michelin', 'Nokian'];
const PRICES = [6740, 7570, 4150, 9650, 8410, 10350, 4470];
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
let store = {
    catalog: [],
    cart: [],
    createDTO: function(){
        for(let i = 0; i < NAMES.length; i++){
            this.catalog.push (this.createProduct(NAMES[i], PRICES[i], i));
        }
    },
    createProduct: function(name, price, j){
        return {
            id: j+1,
            name: name,
            price: price,
            img: image,
            createTemplate: function(){
                return `
                <div class="products-item">
                <img src="${this.img}" alt="logo">
                <div class="desc">
                    <span class="name">${this.name}</span>
                    <span class="price">${this.price}&nbsp;&#8381;</span>
                    <button class="buy-btn" data-id="${this.id}" data-name="${this.name}" data-price="${this.price}">Купить</button>
                </div>
                </div>
                `
            }
        }
    },
    renderCatalog: function () {
        let htmlStr = ''
        this.catalog.forEach (el => {
            htmlStr += el.createTemplate ()
        })
        document.querySelector ('.products').innerHTML = htmlStr
    },
    showCart: function() {
        document.querySelector ('.cart-block').classList.toggle ('invisible')
    },
    renderCart: function(){
        let htmlStr = ''
        this.cart.forEach (el => {
            htmlStr += `
                <div class="cart-item">
                    <div class="product-bio">
                        <img src="${cartImage}" alt="">
                        <div class="product-desc">
                            <p class="product-title">${el.name}</p>
                            <p class="product-quantity">${el.quantity}</p>
                            <p class="product-single-price">${el.price}&nbsp;&#8381;</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${el.quantity * el.price}&nbsp;&#8381;</p>
                        <button class="del-btn" data-id="${el.id}">&times;</button>
                    </div>
                </div>
                `
        })
        document.querySelector ('.cart-block').innerHTML = htmlStr;
    },
    addProduct: function(prod){
        let find = this.cart.find (el => {
            return el.id === +prod.dataset ['id']
        })
        if (find) {
            find.quantity ++
        } else {
            store.cart.push ({
                name: prod.dataset ['name'],
                price: +prod.dataset ['price'],
                id: +prod.dataset ['id'],
                quantity: 1
            })
        }
        this.renderCart ()
    },
    removeProduct: function(prod){
        let find = this.cart.find (el => {
            return el.id === +prod.dataset ['id']
        })
        if (find.quantity > 1) {
            find.quantity --
        } else {
            this.cart.splice (this.cart.indexOf (find), 1)
        }
        this.renderCart ()
    }
}
store.createDTO();
store.renderCatalog();
document.querySelector ('.cart').addEventListener ('click', store.showCart);
document.querySelector ('.products').addEventListener ('click', function (evt) {
    if (evt.target.classList.contains ('buy-btn')) {
        store.addProduct (evt.target);
    }
});
document.querySelector ('.cart-block').addEventListener ('click', function (evt) {
    if (evt.target.classList.contains ('del-btn')) {
        store.removeProduct (evt.target);
    }
});
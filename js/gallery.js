let carousel = document.querySelector('.carousel');
function getGal(){
    let nodeStr = '<img class="carousel-img carousel-img-active" onclick = "SetMain(this)" src="img/gallery-img/1.jpg" height="80">';
    for (let i = 2; i <= 8; i++){
        nodeStr += `<img class="carousel-img" onclick = "SetMain(this)" src="img/gallery-img/${i}.jpg" height="80">`;
    }
    carousel.innerHTML = nodeStr;
}
function SetMain(img){
    document.querySelector('.main').src = img.src;
    let active = document.querySelector('.carousel-img-active');
    active.classList.remove('carousel-img-active');
    img.classList.add('carousel-img-active');
}
function GoLeft(){
    let arr = [...document.querySelectorAll('.carousel-img')];
    let active = document.querySelector('.carousel-img-active');
    num = arr.indexOf(active);
    active.classList.remove('carousel-img-active');
    if (num === 0) {
        document.querySelector('.main').src = arr[arr.length-1].src;
        arr[arr.length-1].classList.add('carousel-img-active');
    } else{
        document.querySelector('.main').src = arr[num-1].src;
        arr[num-1].classList.add('carousel-img-active');
    }
}
function GoRight(){
    let arr = [...document.querySelectorAll('.carousel-img')];
    let active = document.querySelector('.carousel-img-active');
    num = arr.indexOf(active);
    active.classList.remove('carousel-img-active');
    if (num === (arr.length-1)) {
        document.querySelector('.main').src = arr[0].src;
        arr[0].classList.add('carousel-img-active');
    } else{
        document.querySelector('.main').src = arr[num+1].src;
        arr[num+1].classList.add('carousel-img-active');
    }
}
getGal();
let carousel = document.querySelector('.carousel');
function getGal(){
    let nodeStr = '';
    for (let i = 1; i <= 8; i++){
        nodeStr += `<img class="carousel-img" onclick = "SetMain(this)" src="img/${i}.jpg" height="80">`;
    }
    carousel.innerHTML = nodeStr;
}
function SetMain(img){
    document.querySelector('.main').src = img.src;
}
function GoLeft(){
    let main = document.querySelector('.main').src;
    let arr = [...document.querySelectorAll('.carousel-img')];
    for (let j = 0; j < arr.length; j++){
        arr[j] = arr[j].src
    }
    len = arr.length;
    num = arr.indexOf(main);
    (num === 0) ? main = arr[len-1] : main = arr[num-1];
    document.querySelector('.main').src = main;
}
function GoRight(){
    let main = document.querySelector('.main').src;
    let arr = [...document.querySelectorAll('.carousel-img')];
    for (let j = 0; j < arr.length; j++){
        arr[j] = arr[j].src
    }
    len = arr.length;
    num = arr.indexOf(main);
    (num === 7) ? main = arr[0] : main = arr[num+1];
    document.querySelector('.main').src = main;
}
getGal();
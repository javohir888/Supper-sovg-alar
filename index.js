let hidden = document.querySelector("#hidden");
let box = document.querySelector("#box");
let btn = document.querySelector("#btn");
let yakun = document.querySelector("#yakun");
let oxiri = document.querySelector("#oxiri");
let yutuq = document.querySelector(".yutuq");

oxiri.addEventListener('click', () => {
    box.parentNode.removeChild(box);
    yakun.setAttribute("class", "yakum");
    yutuq.parentNode.removeChild(yutuq);
})

let boxOne = document.querySelector(".box1");
let imageOne = document.querySelector(".box1 > img");
boxOne.addEventListener('click', () => {
    imageOne.parentNode.removeChild(imageOne);
    boxTwo.parentNode.removeChild(boxTwo);
    boxThree.parentNode.removeChild(boxThree);
    boxFour.parentNode.removeChild(boxFour);
    boxFive.parentNode.removeChild(boxFive);
    boxsix.parentNode.removeChild(boxsix);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});

let boxTwo = document.querySelector(".box2");
let imageTwo = document.querySelector(".box2 > img");
boxTwo.addEventListener('click', () => {
    imageTwo.parentNode.removeChild(imageTwo);
    boxOne.parentNode.removeChild(boxOne);
    boxThree.parentNode.removeChild(boxThree);
    boxFour.parentNode.removeChild(boxFour);
    boxFive.parentNode.removeChild(boxFive);
    boxsix.parentNode.removeChild(boxsix);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});

let boxThree = document.querySelector(".box3");
let imageThree = document.querySelector(".box3 > img");
boxThree.addEventListener('click', () => {
    imageThree.parentNode.removeChild(imageThree);
    boxTwo.parentNode.removeChild(boxTwo);
    boxOne.parentNode.removeChild(boxOne);
    boxFour.parentNode.removeChild(boxFour);
    boxFive.parentNode.removeChild(boxFive);
    boxsix.parentNode.removeChild(boxsix);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});

let boxFour = document.querySelector(".box4");
let imageFour = document.querySelector(".box4 > img");
boxFour.addEventListener('click', () => {
    imageFour.parentNode.removeChild(imageFour);
    boxTwo.parentNode.removeChild(boxTwo);
    boxThree.parentNode.removeChild(boxThree);
    boxOne.parentNode.removeChild(boxOne);
    boxFive.parentNode.removeChild(boxFive);
    boxsix.parentNode.removeChild(boxsix);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});

let boxFive = document.querySelector(".box5");
let imageFive = document.querySelector(".box5 > img");
boxFive.addEventListener('click', () => {
    imageFive.parentNode.removeChild(imageFive);
    boxTwo.parentNode.removeChild(boxTwo);
    boxThree.parentNode.removeChild(boxThree);
    boxFour.parentNode.removeChild(boxFour);
    boxOne.parentNode.removeChild(boxOne);
    boxsix.parentNode.removeChild(boxsix);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});

let boxsix = document.querySelector(".box6");
let imagesix = document.querySelector(".box6 > img");
boxsix.addEventListener('click', () => {
    imagesix.parentNode.removeChild(imagesix);
    boxTwo.parentNode.removeChild(boxTwo);
    boxThree.parentNode.removeChild(boxThree);
    boxFour.parentNode.removeChild(boxFour);
    boxFive.parentNode.removeChild(boxFive);
    boxOne.parentNode.removeChild(boxOne);
    hidden.setAttribute('class', 'hidden');
    btn.setAttribute('class', 'kurindi');
});


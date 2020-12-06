import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

function renderHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    document.body.appendChild(heart);
    return heart;
}

function renderHeartContainer(heart) {
    const heartContainer = document.createElement('div');
    heartContainer.classList.add('heart__container');

    const img = document.createElement('img');
    img.src = 'src/assets/img/heart.svg';
    img.classList.add('heart__container-image');

    heartContainer.appendChild(img);
    heart.appendChild(heartContainer);
}

const heart = renderHeart();
renderHeartContainer(heart);
import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

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

    heartContainer.style.left = `${Math.random() * 100}%`;

    const img = document.createElement('img');
    img.src = 'public/heart.svg';
    img.classList.add('heart__container-image');

    img.style.transform = `scale(${Math.random()})`;

    heartContainer.appendChild(img);
    heart.appendChild(heartContainer);

    setTimeout(renderHeartContainer, 500, heart);
}

const heart = renderHeart();
renderHeartContainer(heart);
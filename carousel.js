let reviewObject = [
    {
        name: 'malignant',
        src: './reviews/imgs/malignant-poster.jpg',
        alt: 'malignant poster',
        class: 'poster',
        link: './reviews/malignant.html'
    }, {
        name: 'escape room 2',
        src: './reviews/imgs/escape_room_2-poster.jpg',
        alt: 'escape room 2 poster',
        class: 'poster',
        link: './reviews/escape-room-2.html'
    }
]

let currentReview = document.querySelector('.carousel-content');
const img = document.createElement('img');
img.src = reviewObject[0].src;
img.alt = reviewObject[0].alt;
img.className = reviewObject[0].class;
currentReview.appendChild(img);

let currentPoster = 0;

const right = () => {
    currentPoster++;
    if (currentPoster >= reviewObject.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
}

const left = () => {
    currentPoster--;
    if (currentPoster < 0) currentPoster = reviewObject.length - 1;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
}

document.querySelector('.button-right').onclick = right;
document.querySelector('.button-left').onclick = left;
const reviewObject = [
    {
        name: 'malignant',
        src: './reviews/posters/malignant-poster.jpg',
        alt: 'malignant poster',
        class: 'poster',
        link: './reviews/malignant.html'
    }, {
        name: 'escape room 2',
        src: './reviews/posters/escape_room_2-poster.jpg',
        alt: 'escape room 2 poster',
        class: 'poster',
        link: './reviews/escape-room-2.html'
    }, {
        name: 'the slob',
        src: './reviews/posters/the-slob.jpg',
        alt: 'the slob cover',
        class: 'poster',
        link: './reviews/the-slob.html'
    }, {
        name: 'in the hands of the heathens',
        src: './reviews/posters/in-the-hands-of-the-heathens.jpg',
        alt: 'in the hands of the heathens cover',
        class: 'poster',
        link: './reviews/in-the-hands-of-the-heathens.html'
    }, {
        name: 'halloween kills',
        src: './reviews/posters/halloween-kills_poster.jpg',
        alt: 'halloween kills poster',
        class: 'poster',
        link: './reviews/halloween-kills.html'
    }, {
        name: 'chucky',
        src: './reviews/posters/chucky-show_poster.jpeg',
        alt: 'chucky poster',
        class: 'poster',
        link: './reviews/chucky-show.html'
    }
    // , {
    //     name: '',
    //     src: './reviews/posters/',
    //     alt: 'poster',
    //     class: 'poster',
    //     link: './reviews/'
    // }
];

let currentReview = document.querySelector('.carousel-content');
const link = document.createElement('a');
link.href = reviewObject[0].link;
currentReview.appendChild(link);

const img = document.createElement('img');
img.src = reviewObject[0].src;
img.alt = reviewObject[0].alt;
img.className = reviewObject[0].class;
link.appendChild(img);

let currentPoster = 0;

const right = () => {
    currentPoster++;
    if (currentPoster >= reviewObject.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
    link.href = reviewObject[currentPoster].link;
    currentReview.appendChild(link);
}

const left = () => {
    currentPoster--;
    if (currentPoster < 0) currentPoster = reviewObject.length - 1;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
    link.href = reviewObject[currentPoster].link;
    currentReview.appendChild(link);
}

setInterval(function() {
    currentPoster++;
    if (currentPoster >= reviewObject.length) currentPoster = 0;
    const img = document.querySelector('.poster');
    img.src = reviewObject[currentPoster].src;
    img.alt = reviewObject[currentPoster].alt;
    img.className = reviewObject[currentPoster].class;
    link.href = reviewObject[currentPoster].link;
    currentReview.appendChild(link);
}, 5200);

document.querySelector('.button-right').onclick = right;
document.querySelector('.button-left').onclick = left;
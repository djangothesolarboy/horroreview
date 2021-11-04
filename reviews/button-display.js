// function display() {
//     const element = document.querySelector('.display-episode-review');
//     const button = document.querySelector('.display-button');

//     if (element.style.display === 'none') {
//         element.style.display = 'block';
//         button.style.transform = 'rotate(90deg)';
//     } else {
//         element.style.display = 'none';
//         button.style.transform = 'rotate(360deg)';
//     }
// }

// function display2() {
//     const element = document.querySelector('.display-episode-review2');
//     const button = document.querySelector('.display-button2');

//     if (element.style.display === 'none') {
//         element.style.display = 'block';
//         button.style.transform = 'rotate(90deg)';
//     } else {
//         element.style.display = 'none';
//         button.style.transform = 'rotate(360deg)';
//     }
// }

// function display3() {
//     const element = document.querySelector('.display-episode-review3');
//     const button = document.querySelector('.display-button3');

//     if (element.style.display === 'none') {
//         element.style.display = 'block';
//         button.style.transform = 'rotate(90deg)';
//     } else {
//         element.style.display = 'none';
//         button.style.transform = 'rotate(360deg)';
//     }
// }

class Episode {
    constructor(ep) {
        this.ep = ep;
    }
    
    toggleEpisode() {
        let element = document.querySelector(`.display-episode-review${this.ep}`);
        let button = document.querySelector(`.display-button`);
        console.log(element, button)
        if (element.style.display === 'none') {
            element.style.display = 'block';
            button.style.transform = 'rotate(90deg)';
        } else {
            element.style.display = 'none';
            button.style.transform = 'rotate(360deg)';
        }
    }
}

let ep1_1 = new Episode('1-1');
let ep1_2 = new Episode('1-2');
let ep1_3 = new Episode('1-3');
console.log(ep1_2)

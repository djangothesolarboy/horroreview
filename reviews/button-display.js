function display() {
    const element = document.querySelector('.display-episode-review');
    const button = document.querySelector('.display-button');

    // element.style.display = 'none';
    if (element.style.display === 'none') {
        element.style.display = 'block';
        button.style.transform = 'rotate(90deg)';
    } else {
        element.style.display = 'none';
        button.style.transform = 'rotate(360deg)';
    }
}
const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {

    const randomNumber = Math.floor(Math.random() * 4);
    console.log('rand == > ', randomNumber)
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber]
})
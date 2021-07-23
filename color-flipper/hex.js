const hex = [0, 1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
console.log(btn, color)
btn.addEventListener('click', () => {
    //  Get random numnber => 0 - 15
        // #012f12
    let colr = '';
    for(let i = 0; i< 6; i++){
        const randomNumber = Math.floor(Math.random()* 16);
        colr = colr + hex[randomNumber]
    }
    colr = '#' + colr;

    color.textContent = colr;
    document.body.style.backgroundColor = colr;

})
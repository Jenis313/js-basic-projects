//Initial value
let currentValue = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget.classList;
        if(targetBtn.contains('decrease')){
            currentValue--;
        }
        else if(targetBtn.contains('increase')){
            currentValue++;
        }else{
            currentValue = 0;
        }
        if(currentValue<0){
            value.style.color = 'red';
        }else if(currentValue > 0){
            value.style.color = 'green';
        }else{
            value.style.color = 'black';
        }
        value.textContent = currentValue;
    })
})

// let decrease = document.querySelector('.decrease');
// let reset = document.querySelector('.reset');
// let increase = document.querySelector('.increase');
// let value = document.querySelector('#value');
// let currentValue = 0;
// decrease.addEventListener('click', () => {
//     currentValue--;
//     value.textContent = currentValue;
//     if(currentValue<0){
//         value.style.color = 'red';
//     }else if(currentValue === 0){
//         value.style.color = 'black';
//     }else{
//         value.style.color = 'green';
//     }
// })
// reset.addEventListener('click', () => {
//     currentValue = 0;
//     value.textContent = currentValue;
//     value.style.color = 'black';
// })
// increase.addEventListener('click', () => {
//     currentValue++;
//     value.textContent = currentValue;
//     if(currentValue>0){
//         value.style.color = 'green';
//     }else if(currentValue === 0){
//         value.style.color = 'black';
//     }else{
//         value.style.color = 'red';
//     }
// })

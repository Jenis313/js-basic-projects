const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;
// Action on next button
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update();
})

// Action on next button
prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update();
})
function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        }else{
            console.log(index)
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    // (currentActive-circles.length)/100
    progress.style.width = ((currentActive-1)/(circles.length-1))*100 + '%';

    if(currentActive === 1){
        prev.disabled = true;
    }else if(currentActive === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}
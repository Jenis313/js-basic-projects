const btns = document.querySelectorAll('.panel');
btns.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
        removeActiveClass()
        btn.classList.add('active');
    })
})
function removeActiveClass(){
    btns.forEach(btn => btn.classList.remove('active'))
}
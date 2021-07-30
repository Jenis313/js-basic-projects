const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeMenu = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('show');
    sidebarToggle.style.display = 'none'
})
closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('show')
    sidebarToggle.style.display = 'block'
})
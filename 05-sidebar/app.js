let sidebarToggle = document.querySelector('.sidebar-toggle');
let sidebar =document.querySelector('.sidebar');
let closeBtn = document.querySelector('.close-btn');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});
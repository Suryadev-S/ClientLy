const sidebarToggleButton = document.querySelector('#sx-sidebar-toggle-button');
const navbar = document.querySelector('.sx-navbar');
const sidebar = document.querySelector('.sx-sidebar');
const sidebarCurtain = document.querySelector('.sx-sidebar-curtain');
const subNavItems = document.querySelectorAll('.sx-nav-item');

document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target)) {
        navbar.classList.remove('open');
    }
});

sidebarToggleButton.addEventListener('click', () => {
    navbar.classList.toggle('open'); //for mobile
    sidebarCurtain.classList.toggle('veil'); //for desktop
    closeAllSubNavs();
});

function handleToggleSubNav(event) {
    if (sidebarCurtain.classList.contains('veil')) {
        sidebarCurtain.classList.remove('veil');
    }
    event.currentTarget.classList.toggle('sx-sub-nav--open');
}

function closeAllSubNavs() {
    subNavItems.forEach(item => {
        item.classList.remove('sx-sub-nav--open');
    });
}
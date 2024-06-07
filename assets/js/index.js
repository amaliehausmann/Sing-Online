document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search');
    const searchBar = document.getElementById('searchbar');

    searchIcon.addEventListener('click', function() {
        if (searchBar.style.display === 'none' || searchBar.style.display === '') {
            searchBar.style.display = 'block';
        } else {
            searchBar.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('togglemenu');
    const closeMenu = document.getElementById('closeMenu');

    burgerMenuIcon.addEventListener('click', function() {
        menu.style.display = 'block';
        burgerMenuIcon.style.display = 'none';
    });

    closeMenu.addEventListener('click', function() {
        menu.style.display = 'none';
        burgerMenuIcon.style.display = 'block';
    });
});

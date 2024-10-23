document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('search');
    const searchBar = document.getElementById('searchbar');
    const burgerMenuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('togglemenu');
    const closeMenu = document.getElementById('closeMenu');

    searchIcon.addEventListener('click', function() {
        searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'block' : 'none';
    });

    burgerMenuIcon.addEventListener('click', function() {
        menu.style.display = 'block';
        burgerMenuIcon.style.display = 'none';
    });

    closeMenu.addEventListener('click', function() {
        menu.style.display = 'none';
        burgerMenuIcon.style.display = 'block';
    });
});

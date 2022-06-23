var dropdownMenu = document.querySelector('#dropdown-menu');
var dropdownList = document.querySelector('#dropdown');

function hideDropdown(w) {
    if (w.matches) {
        dropdownList.classList.remove('show-dropdown');
    }
}

var w = window.matchMedia("(min-width: 800px)");
hideDropdown(w);
w.addListener(hideDropdown);

dropdownMenu.addEventListener('click', function() {
    dropdownList.classList.toggle('show-dropdown');
});
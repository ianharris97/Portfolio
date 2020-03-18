var menuButton = document.querySelector('.menu-button');
var menuList = document.querySelector('.menu-list');

function showMenuList() {
  menuList
  menuButton.style.display = 'none';
  menuList.style.display = 'block';
}

function hideMenuList() {
  menuList.style.display = 'none';
  menuButton.style.display = 'block';
}

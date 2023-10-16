export function setupNavbar() {
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-opened');
    });
  });
}

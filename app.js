const toggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidenav = document.querySelector('.sidebar');

toggle.addEventListener('click', function () {
  // if (sidenav.classList.contains('show-sidebar')) {
  //   sidenav.classList.remove('show-sidebar')
  // } else {
  //   sidenav.classList.add('show-sidebar')
  // }
  sidenav.classList.toggle('show-sidebar')
});

closeBtn.addEventListener('click', function () {
  sidenav.classList.remove('show-sidebar')
})
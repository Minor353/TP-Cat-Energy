module.exports = function () {
  const navBtn = document.querySelector('.burger');
  const navPanel = document.querySelector('.nav');

  navBtn.addEventListener('click', function () {
    navBtn.classList.toggle('burger-active');
    navPanel.classList.toggle('nav-active');
    navPanel.classList.toggle('nav-animate');
  })

};
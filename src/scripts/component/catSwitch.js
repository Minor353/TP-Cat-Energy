module.exports = function () {
  const switchBtn = document.querySelectorAll('.exemple_right-range-text');
  const switchBtnBefore = document.querySelector('.exemple_right-range--before');
  const switchBtnAfter = document.querySelector('.exemple_right-range--after');
  const catBefore = document.querySelector('.exemple_right-img-before');
  const catAfter = document.querySelector('.exemple_right-img-after');


  const styleTogle = function () {
    for (let i = 0; i < switchBtn.length; i++) {
      switchBtn[i].classList.remove('exemple_right-range-text--active');
    };
  };


  switchBtnAfter.addEventListener('click', function () {
    styleTogle();
    switchBtnAfter.classList.add('exemple_right-range-text--active');
    catAfter.classList.remove('exemple_right-img--inactive');
    catBefore.classList.add('exemple_right-img--inactive');
  })


  switchBtnBefore.addEventListener('click', function () {
    styleTogle();
    switchBtnBefore.classList.add('exemple_right-range-text--active');
    catBefore.classList.remove('exemple_right-img--inactive');
    catAfter.classList.add('exemple_right-img--inactive');
  })
};
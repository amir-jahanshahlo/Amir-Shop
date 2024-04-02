const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.Login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click' , ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click' , ()=> {
    wrapper.classList.remove('active');
})

const toggleBtn = document.querySelector('.toggle-btn')
  const toggle1BtnIcon = document.querySelector('.toggle-btn i')
  const dropDownMneu = document.querySelector('.dropdown-menu')

  toggleBtn.onclick =function () {
    dropDownMneu.classList.toggle('open')
    const isopen = dropDownMneu.classList.contains('open')

    toggle1BtnIcon.classList = isopen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
  }
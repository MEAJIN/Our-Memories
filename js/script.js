// search, 검색 버튼 클릭 후 발생 이벤트
const searchForm = document.querySelector('.search-form');

document.querySelector('#search').onclick = () => {
  searchForm.classList.toggle('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
  loginFormCloseAf.classList.remove('active');
}

//login-on, 로그인 폼 on
const loginForm = document.querySelector('.login-form');

document.querySelector('.sign-in').onclick = () => {
  loginForm.classList.toggle('active');
  loginFormCloseAf.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

//login-close-btn-on,  로그인 폼 닫기 버튼 활성
const loginFormCloseBtn = document.querySelector('.login-form-close-btn');

document.querySelector('#sign-in').onclick = () => {
  loginFormCloseBtn.classList.toggle('active');
  loginForm.classList.toggle('active');
  searchForm.classList.remove('active');
  navbar.classList.remove('active');
}

//login-form-close, 모든 로그인 폼 닫기 버튼 클릭 > 로그인 폼 off
const loginFormCloseAf = document.querySelector('.login-form-close-af');

document.querySelector('#form-close').onclick = () => {
  loginFormCloseAf.classList.remove('active');
  loginFormCloseBtn.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
}

//menu-btn-on, 메뉴 버튼 클릭 후 발생 이벤트
const navbar = document.querySelector('.navbar');

document.querySelector('#menu').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  loginFormCloseBtn.classList.remove('active');
}

//menu-btn-off, 메뉴 닫기 버튼 클릭 후 발생 이벤트
const close = document.querySelector('.close');

document.querySelector('#box-close').onclick = () => {
  close.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  loginFormCloseBtn.classList.remove('active');
  loginFormCloseAf.classList.remove('active');
}

//remove
window.click = () => {
  searchForm.classList.remove('active');
  loginForm.classList.remove('active');
  navbar.classList.remove('active');
  close.classList.remove('active');
  loginFormCloseBtn.classList.remove('active');
  loginFormCloseAf.classList.remove('active');
}
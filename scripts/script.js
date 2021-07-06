const headerCityButton = document.querySelector('.header__city-button');

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город, а?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите Ваш город');
  headerCityButton.textContent = city;

  localStorage.setItem('lomoda-location', city);
})

// Блокировка скролла

const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  console.log(widthScroll);
  document.body.style.cssText = `
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
}

const enableScroll = () => {
  document.body.style.cssText = `
    overflow: auto;
  `
}

// Модальное окно

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disableScroll();
}

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enableScroll();
}

subheaderCart.addEventListener('click', cartModalOpen);

cartOverlay.addEventListener('click', event => {
  const target = event.target;

  if (target.matches('.cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose();
  }
})
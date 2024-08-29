'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10); // Delay to trigger transition
};

const closeModal = function () {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }, 400); // Match the transition duration
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  darkModeToggle.textContent =
    darkModeToggle.textContent === '🌙 Dark Mode'
      ? '☀️ Light Mode'
      : '🌙 Dark Mode';
});

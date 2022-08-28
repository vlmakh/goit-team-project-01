const refs = {
  openModalBtnHeader: document.querySelector('[data-modal-open-1]'),
  openModalBtnHero: document.querySelector('[data-modal-open-2]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtnHeader.addEventListener('click', toggleModal);
refs.openModalBtnHero.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

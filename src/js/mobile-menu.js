(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-btn]'),
    mobMenu: document.querySelector('[data-menu]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobMenu.classList.toggle('is-closed');
  }
})();

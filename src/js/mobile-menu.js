(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-menu-btn]'),
    mobMenu: document.querySelector('[data-menu]'),
    // navHomeRef: document.querySelector('[data-home]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.mobMenu.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobMenu.classList.toggle('is-closed');
  }
})();

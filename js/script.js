// Код для активации focus в браузере Safari

document.addEventListener('click', event => {
  if (event.target.matches('button')) {
    event.target.focus()
  }
});

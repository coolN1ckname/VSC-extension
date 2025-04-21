document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.spoiler details').forEach(details => {
    details.open = false; // Начальное состояние - закрыто

    details.querySelector('summary').addEventListener('click', (event) => {
      event.preventDefault(); // Предотвращаем стандартное раскрытие
      details.open = !details.open; // Переключаем состояние
    });
  });
});



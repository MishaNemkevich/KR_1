// Скрипт для обработки кнопки "Отправить"
document.querySelector('.submit-button').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию

    // Показ уведомления пользователю
    alert('Ответ отправлен!');

    // Перенаправление пользователя в личный кабинет
    window.location.href = 'dashboard.html'; // Укажи правильный URL для личного кабинета
});

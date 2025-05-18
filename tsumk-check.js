// Получение элементов формы
const submitButton = document.querySelector('.submit-button');
const fields = {
    authors: document.getElementById('authors'),
    discipline: document.getElementById('discipline'),
    specialty: document.getElementById('specialty'),
    specialtyCode: document.getElementById('specialty-code'),
    protocol: document.getElementById('protocol'),
    review: document.getElementById('review'),
    explanatoryNote: document.getElementById('explanatory-note'),
    tsumk: document.getElementById('tsumk'),
};

// Функция проверки заполненности полей
function areFieldsValid() {
    let isValid = true;

    for (const key in fields) {
        const field = fields[key];

        // Проверка текстовых полей
        if (field.type === 'text' && field.value.trim() === '') {
            isValid = false;
            field.style.border = '2px solid red'; // Подсвечиваем незаполненные поля
        } else if (field.type === 'file' && field.files.length === 0) {
            // Проверка файловых полей
            isValid = false;
            field.style.border = '2px solid red';
        } else {
            field.style.border = ''; // Убираем подсветку
        }
    }

    return isValid;
}

// Обработчик нажатия на кнопку отправки
submitButton.addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию

    // Проверка всех полей
    if (areFieldsValid()) {
        alert('Заявка успешно отправлена!');
        window.location.href = 'dashboard.html'; // Укажи правильный URL для личного кабинета
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

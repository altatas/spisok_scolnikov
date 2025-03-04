alert("Список толтыр чорт");

// Получаем элементы DOM
const studentList = document.getElementById('student-list');
const addStudentForm = document.getElementById('add-student-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const birthYearInput = document.getElementById('birth-year');
const performanceInput = document.getElementById('performance');

// Массив для хранения списка школьников
let students = [];

// Функция для обновления списка школьников на странице
function updateStudentList() {
    studentList.innerHTML = ''; // Очищаем список

    students.forEach((student, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${student.firstName} ${student.lastName} | Год рождения: ${student.birthYear} | Успеваемость: ${student.performance}`;

        // Создаем кнопку для удаления школьника
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.classList.add('delete');
        deleteButton.onclick = function() {
            removeStudent(index); // Удаляем школьника по индексу
        };

        li.appendChild(deleteButton);
        studentList.appendChild(li);
    });
}

// Функция для добавления нового школьника в список
addStudentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем отправку формы

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const birthYear = birthYearInput.value.trim();
    const performance = performanceInput.value;

    if (firstName && lastName && birthYear && performance) {
        // Добавляем нового школьника в массив
        students.push({
            firstName: firstName,
            lastName: lastName,
            birthYear: birthYear,
            performance: performance
        });
        
        updateStudentList(); // Обновляем список на странице
        firstNameInput.value = '';
        lastNameInput.value = '';
        birthYearInput.value = '';
        performanceInput.value = '';
    }
});

// Функция для удаления школьника
function removeStudent(index) {
    students.splice(index, 1); // Удаляем школьника из массива по индексу
    updateStudentList(); // Обновляем список на странице
}

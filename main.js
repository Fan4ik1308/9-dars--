function getInput(promptText) {
    let input;
    do {
        input = prompt(promptText).trim();
    } while (!input);
    return input;
}

function formatName(name, formatType) {
    if (formatType === "1") {
        return name.toLowerCase(); // Весь текст в нижний регистр
    } else if (formatType === "2") {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // Первая буква заглавная
    }
    return null;
}

function getValidAge() {
    let age;
    do {
        age = prompt("Введите ваш возраст:");
    } while (isNaN(age) || age <= 0); // Проверяем, что введено число и оно больше 0
    return age;
}

// Запрос данных
let firstName = getInput("Введите ваше имя:");
let lastName = getInput("Введите вашу фамилию:");
let formatType;

do {
    formatType = prompt("Выберите формат имени:\n1 - маленькие буквы\n2 - первая буква большая");
} while (formatType !== "1" && formatType !== "2");

firstName = formatName(firstName, formatType);
lastName = formatName(lastName, formatType);
let age = getValidAge();

// Вывод результата
alert(`Имя: ${firstName}\nФамилия: ${lastName}\nВозраст: ${age}`);
console.log(`Имя: ${firstName}\nФамилия: ${lastName}\nВозраст: ${age}`);

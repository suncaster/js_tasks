const password = prompt("Введите пароль");

const hasUpperCase = /[A-Z]/.test(password);
const hasDigit = /\d/.test(password);
const isValidLength = password.length >= 3 && password.length <= 20;

if (hasUpperCase && hasDigit && isValidLength) {
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
    alert("Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.");
}
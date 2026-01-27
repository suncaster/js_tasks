// 1. Function Declaration
function getName1(name) {
    return `Имя равно ${name}`;
}

// 2. Function Expression
const getName2 = function(name) {
    return `Имя равно ${name}`;
};

// 3. Стрелочная функция
const getName3 = (name) => {
    return `Имя равно ${name}`;
};

// Вызов функций
console.log(getName1("Анна"));
console.log(getName2("Иван"));
console.log(getName3("Мария"));
let correctAnswers = 0;
let incorrectAnswers = 0;

const q1 = prompt("Сколько будет 2 + 2?");
if (Number(q1) === 4) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const q2 = prompt("Сколько будет 2 * 2?");
if (Number(q2) === 4) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const q3 = prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?");
if (Number(q3) === 1) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const q4 = prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?");
if (Number(q4) === 12) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const q5 = prompt("Сколько будет 2 + 2 * 2?");
if (Number(q5) === 6) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

alert(`Конец теста! Правильных ответов — ${correctAnswers}; Неправильных ответов — ${incorrectAnswers}.`);
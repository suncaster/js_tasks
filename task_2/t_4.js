let i = 0;
while (i < 3) {
    let newStudent = prompt("Введите имя нового студента!");
    newStudent = newStudent?.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
}

// do while
let j = 0;
do {
    let newStudent = prompt("Введите имя нового студента!");
    newStudent = newStudent?.trim();
    if (newStudent) {
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    j++;
} while (j < 3);
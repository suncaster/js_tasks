let n = prompt("Введите число N:");
n = Number(n);
if (isNaN(n) || n <= 0) {
console.log("Ошибка: введите положительное число.");
} else {
let sum = 0;
for (let i = 1; i <= n; i++) {
sum += i;
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`);}

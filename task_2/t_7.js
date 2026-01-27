const clientName = prompt("Введите имя клиента");
const clientSpentTodayInput = prompt("Сколько клиент потратил сегодня?");
const clientSpentForAllTimeInput = prompt("Сколько клиент потратил за все время?");

const clientSpentToday = Number(clientSpentTodayInput);
const clientSpentForAllTime = Number(clientSpentForAllTimeInput);

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
    alert("Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.");
} else {
    let discount = 0;
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }

    alert(`Вам предоставляется скидка в ${discount}%`);

    clientSpentForAllTime += clientSpentToday;

    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`);
}
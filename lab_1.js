const myName = 'Ира';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Никиты Михайловича';
const reasonText = 'потому что других вариантов нет уже.';
const numberOfMonth = 2;


const result = `Привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я не изучала ${programmingLanguage} аж ${numberOfMonth} года. Я уверена, что пройду данный курс до конца.`;
console.log(result);
alert(result);


let result2 = result.replaceAll('JavaScript','JAVASCRIPT');
console.log(result2);
console.log(`Длина строки: ${result2.length}`);
console.log(`Первый символ: ${result2[0]}`)
console.log(`Последний символ: ${result2[result2.length-1]}`)


let userName= prompt('Как вас зовут?');
userName = userName.trim().toLowerCase();
let userAge= prompt('Сколько вам лет?');
userAge = userAge.trim();
alert(`Вас зовут ${userName} и вам ${userAge} лет.`)

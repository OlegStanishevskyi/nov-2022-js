// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str = 'hello world';
// console.log(str.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string '
// console.log(str.trim());
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// let strings = str.split(' ');
// console.log(strings);
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0]
// let strings = arr.map(num => num + '');
// console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = (direction ,arr) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a-b);
//     } else if (direction=== 'descending') {
//         arr.sort((a, b) => b-a )
//     }
//     return arr
// }
// console.log(sortNums('descending', nums));

// є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) =>
//     b.monthDuration - a.monthDuration));
// let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filter);
//
// описатописати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше від 9 та більше


// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let arr = (a,b) => a*b ;
// console.log(arr(10,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let arr = (r) => Math.PI * Math.pow(r,2);
// console.log(arr(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let cilinder = (r,h) => Math.PI * Math.pow(r,2) * h;
// console.log(cilinder(10, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr =[1,2,3]
// function foo (array) {
//     for (const item of array) {
//         document.write(item)
//     }
// }
// foo(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function  foo (text) {
//     document.write(`<p>${text}</p>`)
// }
// foo(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo (text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//      </ul>`)
// }
// foo(`hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function foo (text,num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li> ${text} </li>`)
//     }
//     document.write(`</ul>`)
// }
// foo(`hi`,5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1,2,true,'asd']
// function foo (massive) {
//     for (const item of massive) {
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// }
// foo(arr)

// те ж саме , але трохи по-іншому
// let arr = [1,2,true,'asd']
// function foo (massive) {
//     document.write(`<ul>`)
//     for (const item of massive) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`<ul>`)
// }
// foo (arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         name:'oleg',
//         age:'22'
//     },
//     {
//         name:'roma',
//         age: '21'
//     }
// ]
// function foo (array) {
//     for (const item of array) {
//         document.write(`<div>${item.name}--${item.age}</div>`);
//     }
// }
// foo(arr);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [4,5,6,3,7,2,8]
// function foo (array) {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item
//         }
//     } return min
// }
//
// console.log(foo(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1,2,3,4]
// function foo (array) {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     } return sum
// }
//
// console.log(foo(arr));
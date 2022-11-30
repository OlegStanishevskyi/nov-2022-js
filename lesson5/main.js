// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// const square =(a, b) =>a*b;
// console.log(square(10, 30));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// const circle =(r) => Math.PI*Math.pow(r,2)
// console.log(circle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// const cilinder =(r,h) => Math.PI*Math.pow(r,2)*h
// console.log(cilinder(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1,2,3,true]
// function printer (array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// printer(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function foo (text) {
//     document.write(`<p>${text}</p>`);
// }
// foo(`hello`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function foo(text) {
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
//     </ul>`)
// }
// foo(`hello`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
// function foo (text,number) {
// document.write(`<ul>`)
// for (let i = 0; i < number; i++) {
//     document.write(`<li>${text}</li>`);
// }
// document.write(`</ul>`)
// }
// foo('hi','5')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let massive = [1,2,true,false,'asd']
// const elem =function (array) {
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li> ${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// elem(massive);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

// const arr =[
//     {
//         name:'oleg',
//         age:`22`
//     },
//     {
//       name: `roman`,
//       age: `21`
//     }
// ]
//
// const users = function (array) {
//     for (const user of array) {
//         document.write(`<div>${user.name}  ${user.age}</div>`);
//     }
// }
// users(arr);
// - створити функцію яка повертає найменьше число з масиву

// let arr = [5, 2, 7, 1, 10]
//
// function foo(xxx) {
//     let min = xxx[0]
//     for (const item of xxx) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min
// }
//
// console.log(foo(arr))
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [1,2,3,4];
// function foo (array) {
//     let sum = 0;
//     for (const item of array) {
//         sum = item;
//         console.log(sum);
//     }
//     return sum
// }
// // console.log(foo(arr));
// foo(arr);


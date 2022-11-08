// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100500, true, false, 50, 'hello']
console.log(arr);

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'story',
    pageCount: '100',
    genre: 'comedy',
}

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let book2 = {
    title: `story`,
    pageCount: `200`,
    genre: `sport`,
    authors: [
        {
            name: `Oleg`,
            age: 22,
        },

        {
            name: `Vasya`,
            age: `27`,
        }
    ]
}
// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let massif = [
    {
        name: `Oleg`,
        username: `UserOleg`,
        password: `12345`
    },
    {
        name: `Roma`,
        username: `UserRoma`,
        password: `54321`
    },
    {
        name: `Nika`,
        username: `UserNika`,
        password: `456789`,
    },
    {
        name: `Nazar`,
        username: `UserNazar`,
        password: `987654`
    },
    {
        name: `Orest`,
        username: `UserOrest`,
        password: `00000`

    }
]
console.log(massif [0].password );
console.log(massif[1].password);
console.log(massif[2].password);
console.log(massif[3].password);
console.log(massif[4].password)
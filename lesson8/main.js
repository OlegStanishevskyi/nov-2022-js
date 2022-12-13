// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname , email, phone) {
//     this.id = id ;
//     this.surname = surname ;
//     this.email = email ;
//     this.phone = phone ;
// }
// const user1 = new User (1,'Oleg','Pupkin','email@.com','12345678')
// const user2 = new User (2,'Roma','Pupkin','email@.com','12345678')
// const user3 = new User (3,'Igor','Pupkin','email@.com','12345678')
// const user4 = new User (4,'Vasya','Pupkin','email@.com','12345678')
// const user5 = new User (5,'Ostap','Pupkin','email@.com','12345678')
//
// const  arrUsers = [] ;
// arrUsers.push(user1,user2,user3,user4,user5)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = arrUsers.filter(value => value.id % 2 === 0)    // чому тут в кінці 0 ?
// console.log(filter);
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = arrUsers.sort((a, b) => a.id - b.id)
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id ;
//         this.surname = surname ;
//         this.enail = email ;
//         this.phone = phone ;
//         this.order = order;
//     }
// }
// const user1 = new Client (1,'Oleg','Pupkin','email@.com','12345678', [1,2,3,] )
// const user2 = new Client (2,'Roma','Pupkin','email@.com','12345678' , [4,5,6,7])
// const user3 = new Client (3,'Igor','Pupkin','email@.com','12345678' , [8,9,10])
// const user4 = new Client (4,'Vasya','Pupkin','email@.com','12345678' ,[11,12,13,14,19])
// const user5 = new Client (5,'Ostap','Pupkin','email@.com','12345678' , [15,16,]  )


// створити пустий масив, наповнити його 10 об'єктами Client

// const  arrClient = [] ;
// arrClient.push(user1,user2,user3,user4,user5)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sort = arrClient.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);

// Створити функцію конструктор яка дозволяє створювати об'єкти car,' +
// ' з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model,producer,year,maxSpeed,engine) {
//     this.modell = model;
//     this.producerr = producer;
//     this.yearr = year;
//     this.maxSpeedd = maxSpeed;
//     this.enjinee = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//
//     this.info = function (){
//         for (const carKey in this) {
//             if (typeof this[carKey] !== "function") {
//                 console.log(`${carKey} -- ${this[carKey]}`)
//             }
//         }
//     }
// //
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// const car = new Car(`toyota`,'japan',2010,200,2.5);
// console.log(car);
// car.drive() ;
// car.info();
// car.increaseMaxSpeed(240);
// car.changeYear(2015);
// car.addDriver({name:'oleg'});

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,' +
// ' максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// ______________________________________________________________________________________________________
// class Car {
//     constructor(model,producer,year,maxSpeed) {
//         this.modell = model;
//         this.producerr = producer;
//         this.yearr = year;
//         this.maxSpeedd = maxSpeed;
//
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeedd} на годину`)
//     }
//     info () {
//         for (const key in this) {
//             if (typeof key !== "function") {
//                 console.log(`${key} --- ${this[key]}`)
//             }
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeedd += newSpeed;
//     }
//     changeYear (newValue) {
//         this.yearr = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
//
// const car = new Car('toyota','japan',2000,200)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(40);
// car.changeYear(2010);
// car.addDriver({name:'oleg',age:'22'});
// console.log(car);

// ________________________________________________________________________________________________________________

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// function Cinderella (name , age , footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let cinderella1 = new Cinderella(`Ann`,20,35);
// let cinderella2 = new Cinderella(`Galyna`,21,36);
// let cinderella3 = new Cinderella(`Sophia`,22,37);
// let cinderella4 = new Cinderella(`Julia`,23,38);
//
// const arrofcinderella = [];
// arrofcinderella.push(cinderella1,cinderella2,cinderella3,cinderella4);
//
// class Prince {
//     constructor(name,age,findfootSize) {
//         this.name = name;
//         this.age = age;
//         this.findfootSize = findfootSize;
//     }
// }
// const prince = new Prince('oleg',22,36);
//
// // -------------------------------------
//
// const find = (arr,boy) => {
//     for (const girl of arr) {
//         if (girl.footSize === boy.findfootSize) {
//             console.log(`this is my ${girl.name}`)
//         }
//     }
// }
//
// find(arrofcinderella , prince);
// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id,name,surname,email,phone) {
//     this.id=id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// const user1 = new User (3,'oleg','pupkin','email.com',1234567)
// const user2 = new User (2,'igor','pupkin','email.com',1234567)
// const user3 = new User (4,'ann','pupkin','email.com',1234567)
// const user4 = new User (1,'roma','pupkin','email.com',1234567)
//
// const arrUser = [];
// arrUser.push(user1,user2,user3,user4);
// console.log(arrUser);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// const filter = arrUser.filter(value => value.id%2 === 0);
// console.log(filter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(arrUser.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id,name,email,order) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.order = order;
//     }
// }
// const cl1 = new Client(1,'olya','email.com',[1,2,3])
// const cl2 = new Client(2,'olya','email.com',[1,2,3,4])
// const cl3 = new Client(3,'olya','email.com',[1,2,3,4,5,6])
// const cl4 = new Client(4,'olya','email.com',[1,2,)

// створити пустий масив, наповнити його 10 об'єктами Client
// const arr = [];
// arr.push(cl1,cl2,cl3,cl4);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// arr.sort((a, b) => a.order.length-b.order.length);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (marka ,producer,year,maxSpeed) {
    this.mymarka = marka ;
    this.myproducer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function () {
        for (const key in this) {
            if (typeof key !== "function") {
                console.log(`${key} --- ${this[key]}`)
            }
        }
    }
}
const car = new Car('toyota','japan', 2000,200);
console.log(car);

this.info = function () {
    for (const nameField in this) {
        if (typeof this [] !==function ) {

        }
    }
}
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
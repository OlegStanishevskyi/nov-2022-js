let user = {
    name : 'oleg',
    age : 22 ,
    wife :{
        name: 'ola',
        age: 20,
    }
};

let {name ,age , wife,wife:{name:namewife , age:agewife}} = user;
console.log(name,age);
console.log(namewife, agewife);

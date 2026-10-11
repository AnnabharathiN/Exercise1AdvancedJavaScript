/*Exercise 1*/
let user = {name : "Bharathi", years : 20 , isAdmin : false};

console.log(user.name); // "Bharathi"
console.log(user.years); // 20      
console.log(user.isAdmin); // false
/*Exercise 2*/
const ourplanetname = "Earth";
const currentVisitor = "Anna";
/*Exercise 3*/
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    console.log(`${phrase}, ${user}`)
  }
  
sayHi()
}
/*Exercise 4*/
let user4 ={};
user4.name = "John";
user4.surname = "Smith";
user4.name = "Pete";
delete user4.name;
/*Exercise 5*/
const user5 = {
  name: "John"
}

user.name = "Pete"
console.log(user.name); // "Pete"
/*Exercise 6*/
let salaries = { 
  Fred: 100, 
  Ted: 160, 
  Ghaith: 130 
};

let sum = 0;
if (Object.keys(salaries).length === 0) {
  sum = 0;
} else {
  for (let key in salaries) {
    sum += salaries[key];
  }
}

console.log(sum);
/*Exercise 7*/
let a=3;
let b=5;
let result=(a+b<4)?'Below':'Over';
console.log(result);

/*Exercise 8*/
let login = 'Director';
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' : '';
  console.log(message);

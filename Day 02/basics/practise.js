const breakSection = () => {
    console.log("=".repeat(40));
}




// Variables and scope: const by default, let when the value changes, never var. Block scope.
breakSection();

const a = 5;
let b = 6;
// a = 7; --> error as a is a const variable

console.log("b:", b);
b = a;
console.log("b:", b);

// scope
{
    console.log("a:", a);
    let c = "inside scope";
    console.log(c);
}

// console.log(c); --> can not call from outside
breakSection();









// Functions: arrow functions, default parameters, rest parameters, returning objects from arrow functions.

const greet = () => {
    console.log("hello world");
}

greet();

// default parameter
const sum = (x=5, y) => {
    console.log(x + y);
}

// sum(7); --> it will return NaN we must use undefined keyword if the default is at first
sum(undefined, 7);
sum(100, 7);


// to avoid undefined for a default parameter
// using default at the last is better choice
const sum2 = (x, y=5) => {
    console.log(x + y);
}

sum2(7);


// rest parameter --> used for multiple variable while dont know the number
const restTest = (...names) => {
    names.forEach((name) => console.log("hello",name));
}

restTest("john", "doe");

// always use the rest parameter at the very last in the function
const restTest2 = (x, ...y) => {
    y.forEach((num) => console.log(x + num));
}

restTest2(2, 3, 4, 5, 6);
console.log("\n");

// using rest with the default param
const restTest3 = (x=50, ...y) => {
    y.forEach((num) => console.log(x - num));
}

restTest3(undefined, 3, 3, 7);
console.log("\n");

restTest3(3, 3, 7);



// returnina a object from arrow function
const retObj = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const myObj = retObj("John Doe", 25);
console.log(myObj);

breakSection();




// Objects and arrays: destructuring (including nested and with defaults), spread and rest (...), shorthand properties, optional chaining (?.), nullish coalescing (??). Understand why { ...obj } makes a shallow copy and why React needs new objects instead of mutated ones.




// Array methods: map, filter, reduce, find, some, every, includes, sort (and why sort mutates; use toSorted or copy first), flatMap. Chaining them.
const sampleUsers = [
  { id: 1,  name: "Aarav Sharma",   age: 28, active: true  },
  { id: 2,  name: "Bella Rahman",   age: 34, active: false },
  { id: 3,  name: "Carlos Mendes",  age: 22, active: true  },
  { id: 4,  name: "Dina Karim",     age: 41, active: true  },
  { id: 5,  name: "Ethan Brooks",   age: 19, active: false },
];

// map --> getting certain data from main array
// map returns array but forEach doesnt return anything only iterate
const mappedArr = sampleUsers.map((elem, idx) => `${elem.name}, ${idx}`);
console.log(mappedArr);
console.log("\n");

// filter --> filter array with user of those whose age are over 25
const userOver25 = sampleUsers.filter((elem) => elem.age > 25);
console.log(userOver25);
// but if we want their name only -- use map to get certain data from main array
console.log(userOver25.map((elem) => elem.name));
console.log("\n");


// func for reduce
// const fn = (prev, curr) => {
//     return (prev + curr.active);
// };
const fn = (prev, curr) => prev + curr.active;

// reduce
console.log(sampleUsers.reduce(fn, 100));
// reduce syntax reduce(func, startVal)


// find --> return the first query that matches the condition
const findUser = sampleUsers.find((elem) => elem.active == true);
console.log(findUser);

// no find all because filter does the work

console.log(sampleUsers.every((elem) => elem.active == true));
console.log(sampleUsers.every((elem) => elem.active)); 
//same means as we check for condition so bool datatype is already a condition
console.log(sampleUsers.some((elem) => elem.active)); 
// some of them true so it will return true


// before mutated sort
console.log(sampleUsers);

//! sampleUsers.sort((a, b) => a.age - b.age);
// after mutated sort the main array
const newArr = sampleUsers.toSorted((a, b) => a.age - b.age);
console.log(newArr);
console.log(sampleUsers);
// so it changes there for copying an extra variable is way to protect the main array or use toSorted()


const copyArr = [...sampleUsers];
console.log(copyArr);
copyArr.sort((a, b) => a.age - b.age);
console.log(copyArr);


console.log(sampleUsers);


breakSection();









// Template literals and string methods: trim, toLowerCase, includes, split, padStart.

console.log("  hello     world     ".trim()); //trim outside extra spaces not inside
console.log("HeLLo wORlD".toLowerCase());
console.log("HeLLo wORlD".toUpperCase());
console.log("example@gmail.com".includes("@"));
console.log("example@gmail.com".includes(".com"));
console.log("example@gmail.com".includes("@.com")); //@.com is not together therefor false read

console.log("hello+world+i+am+a+frontend+dev".split("+"));
console.log("hello+world+i+am+a+frontend+dev".split("")); //split each character
console.log("hello+world+i+am+a+frontend+dev".split(" ")); // there is no space therefor full string returned in a array

console.log("023".padStart(6, "X"));
console.log("023".padEnd(6, "X"));
console.log("023sda".padEnd(6, "X"));
console.log("023sdasdsadasdadadssdad".padEnd(6, "X")); 
// pad syntax digit, default
// it doesn't limit to given digit so have to be sure the string stays within given digit

breakSection();







// Modules: named vs default exports, import paths, why we prefer named exports.

// named import
import { greetings } from "./import.js";
import greetings2 from "./import.js";
greetings("UR");
greetings2("UR");

import hello from "./import.js";
hello("UR");



breakSection();

// Asynchronous JavaScript: the event loop in one paragraph; promises; async / await; try / catch / finally; running requests in parallel with Promise.all and Promise.allSettled.

// The Fetch API: fetch, reading response.ok and response.status, response.json(), sending JSON with headers. Note that fetch does not throw on 4xx / 5xx responses: you must check response.ok.
const fetchData = async () => {
    let response;
    try{
        response = await fetch("https://jsonplaceholder.typicode.com/posts");
    }catch(err){
        throw new Error(err.message);
    }

    if(!response.ok) throw new Error("failed to load the posts");

    const data = await response.json();
    // console.log(data);
}

fetchData();
// breakSection();





// Dates and numbers: Intl.NumberFormat for currency (₹ formatting with en-IN), Intl.DateTimeFormat for dates.
const currencyFormat = (amount) => {
    console.log(Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount));
}
currencyFormat(3450.562); 
currencyFormat(3450.565); 
// it rounded up when last digit is more than 4

const date = new Date();
console.log(date);
console.log(typeof(date)); //object
console.log(date.toDateString()); // only date not time
console.log(date.toLocaleString()); // comes date and time with AM/PM 
console.log(date.toISOString());
// strings

// iso to date object
const date2 = new Date(date.toISOString());
console.log(date2);
console.log(typeof(date2));

const dateFormat = (time) => {
    // return Intl.DateTimeFormat("en-IN").format(time);
    return Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        weekday: "long",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long",
    }).format(time);
}

console.log(dateFormat(date));
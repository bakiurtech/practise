"use strict";
// basics
// implicit types
let greetings = "hello world";
// greetings = 5; --> error
// explicit types
let firstName = "John";
let age = 30;
firstName = "Doe";
age = 100;
// ========= built-in types ========
// boolean
// number
// string
// array
// tuple
// enums
// unknown
// any
// void
// null
// undefined
// array --> countless but exact type
let arr = ["apple", "banana", "cherry"];
let arr2 = [1, 2, 3, 4, 5];
// tuple --> exact match in place and count
let tup = ["bangladesh", 4];
// enums 
// distinct value
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Asia"] = 3] = "Asia";
    Continents[Continents["Europe"] = 4] = "Europe";
    Continents[Continents["Antartica"] = 5] = "Antartica";
    Continents[Continents["Australia"] = 6] = "Australia";
})(Continents || (Continents = {}));
let region = Continents.Africa;
console.log(region); // it will print 2 enum goes for the index wise
const user = {
    name: "John",
    id: 0,
    age: 25
};
const person = {
    id: 2,
    role: "client"
};
let pet = {
    species: "bulldog",
    bark: true,
};
const myData = {
    emp_id: "intern_00",
    emp_name: "baki",
    skills: ["frontend", "react", "next", "tailwindcss"],
    yoe: "N/A"
};
console.log(myData);
function rollDice() {
    return Math.floor(Math.random() * 6 + 1);
}
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log(rollDice());
console.log("\n");
// practise with another function
function getLength(params) {
    return params.length;
}
let fruits = ["apple", "banana"];
console.log(getLength("test"));
console.log(getLength(fruits));
const myCar = {
    name: "toyota",
    fuel: "petrol"
};
console.log(myCar);
// Class
class PersonX {
    name;
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let newPerson = new PersonX("baki");
console.log(newPerson.getName());
// console.log(newPerson.name); this will give error because we cant access private instance of the class
// generic
// if we dont know the type of the incoming params but cant use any
function genFunc(param) {
    return param;
}
console.log(genFunc("bangladesh"));
// universal type array length
function findLength(arg) {
    console.log(arg.length);
}
findLength(["hello", 3, 5]);
findLength(["hello", undefined, 5, true]);
// where to use generic
// when we need a function that can be used for any type not any in typical sense in ts but with any universal type so we will not write 7-8 specific type function for the same work we will go for a universal function that will work for all now
function identity(arg) {
    if (Array.isArray(arg))
        return "array";
    if (arg == null)
        return "null";
    return typeof (arg);
}
console.log("\n");
const a = identity("baki");
console.log(a);
// console.log(identity([1,2,3,4])); // we are getting object for array
console.log(identity(identity));
// console.log(identity(null));  // we are getting object for null
console.log(identity([1, 2, 3, 4]));
console.log(identity(null));
function getFirstElement(arr) {
    return arr[0];
}
// undefined for an empty array
console.log(getFirstElement([]));
console.log(getFirstElement([2, 3, 4]));
console.log(getFirstElement(["a", "b"]));
class Stack {
    stack = [];
    push(elem) {
        this.stack.push(elem);
    }
    pop() {
        this.stack.pop();
    }
    show() {
        console.log(this.stack);
    }
}
const s = new Stack();
s.push(2);
s.push(a);
s.show();
s.pop();
s.show();
// now we defined the type 
const s2 = new Stack();
// s2.push("bangladesh"); error 
s2.push(70);
s2.show();
// multiple type generic
function makePair(A, B) {
    return [A, B];
}
const pair = makePair("hello", 5);
console.log(pair);
// because we did not declared any type therefor it can be anything
console.log(makePair("Cricket", "Football"));
console.log(makePair("Cricket", null));
console.log(makePair(true, null));
function getValue(obj, key) {
    return obj[key];
}
const obj1 = {
    name: "baki",
    age: 100
};
console.log(getValue(obj1, "name"));
console.log(getValue(obj1, "age"));
// console.log(getValue(obj1, "designation")); error as K extends keyof T doesnt have designation
// unknown
let anyTest;
anyTest = "hello";
console.log(anyTest.toUpperCase());
console.log(anyTest + 1);
// ts didnt give error for a string as any means turn off the ts
let ukTest;
ukTest = "hello unknown";
// console.log(ukTest.toUpperCase()); 
// it is giving me error as we cant use ukTest without checking the typeof
if (typeof ukTest === "string") {
    console.log(ukTest.toUpperCase());
}
// now it is working
ukTest = 10;
if (typeof ukTest === "number") {
    console.log(ukTest + 100);
}

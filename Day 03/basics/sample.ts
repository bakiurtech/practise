export {};

// 1.
// Why TypeScript: errors caught while typing instead of in production; editor autocomplete; types as documentation for the team.

// 2.
// Basic types: string, number, boolean, arrays (string[]), tuples, null / undefined, literal types ('asc' | 'desc'). Let TypeScript infer where it can; annotate function parameters and return types.

let name: string = "baki";
let age: number = 10;
let isDev: boolean = true;

let fruits: string[] = ["apple", "banana"];
console.log(name, age, isDev);
fruits.forEach((item) => console.log(item));

console.log("\n");


// array use an array can take string or number
let arr: (string | number)[] = [name, age, age, name, age];
// it can take any total number of element it wants so ts just know
// that it will have either string or number

arr.forEach((elem) => console.log(elem));
console.log("\n");


// the issue is when we want specifically to know where should be which type
// then comes tuples
let tup: [string, number] = ["UR", 10];
console.log(tup);

// tup = ["UR", true]; --> this will give error
// console.log(tup);

// tup = ["UR", 10, 10]; --> only 2 element allowed
// console.log(tup);




let null_val: null = null;
let undefined_val: undefined = undefined;


// literal types
let order: "asc" | "dsc" = "asc";
console.log(order);
order = "dsc";
console.log(order);

// 3.
// Object types: type vs interface (we use type by default and interface for objects meant to be extended), optional properties (?), readonly.
// 4.
// Union types and narrowing: string | number, narrowing with typeof, in, equality checks and discriminated unions (a status field that tells you which shape you have). This is how we model loading / success / error states.
// 5.
// Functions: typing parameters, return types, optional parameters, callback types.
// 6.
// Generics: what Array<T> means; writing a generic ApiResponse<T> and Paginated<T>; constraints with extends.
// 7.
// Utility types: Partial, Pick, Omit, Record, Required, ReturnType. Example: the create-product form uses Omit<Product, 'id' | 'createdAt'>.
// 8.
// unknown vs any: treat data from outside (API, JSON.parse) as unknown until it is checked. any switches the type checker off and is not allowed in our code.
// 9.
// Enums vs union types: we prefer string literal unions ('admin' | 'staff') over enum.
// 10.
// Configuration: what strict: true in tsconfig.json turns on, and why we never turn it off.

// Asynchronous JavaScript: the event loop in one paragraph; promises; async / await; try / catch / finally; running requests in parallel with Promise.all and Promise.allSettled.


// const pro = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             // resolve("foo!");
//             reject("not allowed");
//         }, 3000);
//     }
// );

// // syntax --> new Promise(func(resolve, reject))

// console.log(pro);
// pro
//     .then((val) => console.log(val))
//     .catch((err) => console.log(err));


// const func = async () => {
//     try {
//         const val = await pro;
//         console.log(val);   
//     } catch (error) {
//         console.log(error);
//     }
// }

// func();



// work by work
const func1 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("taking out trash");
            resolve();
        }, 1000);
    });

const func2 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("taking dog out for a walk");
            resolve();
        }, 1000);
    });

const func3 = () =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log("buying tomato from market");
            resolve();
        }, 1000);
    });

func1()                                    
    .then(func2)
    .then(func3)
    .then(() => console.log("all work done!"))
    .catch((err) => console.log(err));



console.log("\n\n\n");

// const promise1 = new Promise(
//     (resolve, reject) =>{
//         setTimeout(() => {
//             console.log("from promise1");
//             resolve();
//         }, 5000);
//     }
// )

// const promise2 = new Promise(
//     (resolve, reject) =>{
//         setTimeout(() => {
//             console.log("from promise2");
//             resolve();
//         }, 5000);
//     }
// )

// const promise3 = new Promise(
//     (resolve, reject) =>{
//         setTimeout(() => {
//             reject("Error");
//         }, 5000);
//     }
// )

// const promise4 = new Promise(
//     (resolve, reject) =>{
//         setTimeout(() => {
//             console.log("from promise4");
//             resolve();
//         }, 5000);
//     }
// )



const returnedPromise = Promise.allSettled([
        Promise.resolve("a"),
        Promise.reject("error in b"),
        Promise.resolve("c"),
    ]);

const returnedPromise2 = Promise.all([
        Promise.resolve("a"),
        Promise.resolve("error in b"),
        Promise.resolve("c"),
    ]);

returnedPromise
    .then((val) => console.log(val))
    .catch(err=>console.log(err));


const asyncFunc = async () => {
    try {
        const data = await returnedPromise2;
        console.log(data);
    } catch (error) {
        console.log(error);
    }finally{

    }
}
asyncFunc();

// Promise.all([promise1, promise2, promise3, promise4])
//     .then()
//     .catch(err=>console.log(err));

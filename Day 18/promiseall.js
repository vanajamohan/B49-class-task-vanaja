function asyncTask1() {
    return new Promise(resolve =>{
        setTimeout(()=>{
           resolve("Task 1 completed");
        },1000);
    });
}

function asyncTask2() {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
          resolve("Task 2 completed");
           //reject("Task 2 rejected");
        },1000);
    });
}

function asyncTask3() {
    return new Promise(resolve =>{
        setTimeout(()=>{
           resolve("Task 3 completed");
        },1000);
    });
}

function asyncTask4() {
    return new Promise(resolve =>{
        setTimeout(()=>{
           resolve("Task 4 completed");
        },1000);
    });
}


Promise.all([asyncTask1(),asyncTask2(),asyncTask3(),asyncTask4()])

.then((val) =>{
    console.log(val);
    console.log("All Task completed !!!");
})
.catch((err) => {
    console.log("Error: ", err);
} );
// asyncTask1()
// .then(
//     (val) => {
//         console.log(val);
//         return asyncTask2();
//     }
// )
// .then(
//     (val) => {
//         console.log(val);
//         return asyncTask3();
//     }
// )
// .then
// (
//     (val) => {
//         console.log(val);
//        console.log("All Task Completed");
//     }
// )
// .catch((err) => {
//     console.log("Error: ", err)
// }

// );
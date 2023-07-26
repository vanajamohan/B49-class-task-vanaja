// let objPromise = new Promise ((resolve,reject)=>{
//     console.log("This is promise Function");
//     });

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
        //   resolve("Task 2 completed");
           reject("Task 2 rejected");
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

asyncTask1()
.then(
    (val) => {
        console.log(val);
        return asyncTask2();
    }
)
.then(
    (val) => {
        console.log(val);
        return asyncTask3();
    }
)
.then
(
    (val) => {
        console.log(val);
       console.log("All Task Completed");
    }
)
.catch((err) => {
    console.log("Error: ", err)
}

);
    // var a = 10;
    // var b = 20;

    // var c = operation(a, b);



    // function operation (num1, num2){
    //     return num1 + num2;
    //     // return function (){
    //     //     console.log("Inner Function!!!");
    //     // };
    // }

    // console.log(c());
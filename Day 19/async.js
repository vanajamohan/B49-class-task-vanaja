function task1(){
    return new Promise ((resolve,reject) =>{
       setTimeout(()=>{
        resolve("Task 1");
        //reject("Cannot execute Task");
       },3000) ;
    });

}

async function executeTask(){
    try{
     let task = await task1();
     console.log("Executing ",task)
    }
    catch(err){
        console.log("Unable to execute Task 1 Before Task 2 ",err);
    }
    console.log("This console is executed after await task");
    console.log("Executing : Task 2 ----  After await task completed ");
}


function callhold(){
    return new Promise ((resolve,reject) =>{
       setTimeout(()=>{
        resolve("Call Resumed");
        //reject("call disconnected");
       },3000) ;
    });

}

async function waiting(){
    try{
     let task = await callhold();
     console.log("Hold Cancelled!!!! ",task)
    }
    catch(err){
        console.log("Unable to execute Task 1 Before Task 2 ",err);
    }
   
}


waiting();
function readBook(callback){
    console.log("starting First Function");
    setTimeout(()=>{
        console.log("Executing Time out Function");
        callback(); // the name is anything
    },3000);
}

function afterReading(){
    console.log("Function  after Set Time out Executed");
}
readBook(afterReading);
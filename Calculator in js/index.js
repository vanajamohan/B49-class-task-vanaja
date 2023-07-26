function performCalculation(opertaion){

    //const num1 =Number.document.getElementById("num1").value;
  //  const num2 =Number.document.getElementById("num2").value;


    const num1 =Number(prompt("Please Enter Number 1: "));
    const num2 =Number(prompt("Please Enter Number 2: "));

    let result;

    switch(opertaion){
        case "add": 
        result = num1 + num2;
        break;
        case "sub": 
        result = num1 - num2;
        break;
        case "mul": 
        result = num1 * num2;
        break;
        case "div": 
        result = num1 / num2;
        break;
        default:
            result = "Invalid Operation";
    }

const addoperation = document.getElementById("addBtn");
const suboperation = document.getElementById("subBtn");
const muloperation = document.getElementById("mulBtn");
const divoperation = document.getElementById("divBtn");

addoperation.addEventListener("click",function(){
    performCalculation("add");
});

suboperation.addEventListener("click",function(){
    performCalculation("sub");
});

muloperation.addEventListener("click",function(){
    performCalculation("mul");
});

divoperation.addEventListener("click",function(){
    performCalculation("div");
});
    setTimeout(()=>
           {
                const msg = confirm("Are you want to display message in text box");
                if(msg){
                    document.getElementById("result").value = result;
                }
                else{
                    alert("Value of " + opertaion + " is: "+result);
                }
                
           },7000 );

            setInterval(()=>
            {
            alert("Hi this is alert for every 10 seconds");
            },10000);
 }


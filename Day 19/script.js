function operation(a,b){
    try{
        if(b > a){
            throw new Error ("B is greater tha A")
        }
        const result = a - b;
        console.log ("Result : ",result) ;
    }
    catch(err){
        console.log("Error occured: ",err) ;
    }
}

operation(10,12);

function trycatchexample(){
    try{
        conole.log("wrong console spelling");
    }
    catch(err){
        console.log("Error occured: ",err) ;
    }
}

trycatchexample();
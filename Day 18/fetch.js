const apiUrl = "https://restcountries.com/v3.1/all";

fetch(apiUrl).then(response => {
    if(response.status === 200){
        return response.json();
    }
}
    ).then((val )=>{
        console.log(val);
       
        for (var i = 0; i < val.length; i++) {
          // var name = Object.keys(countriesDetails[i].name.nativeName)[0];
          // console.log(countriesDetails[i].name.nativeName[name]);
          
                console.log(val[i].flag);
              }
             } )
        .catch((err =>{
            console.log("Error:  ", err)
        })

        );
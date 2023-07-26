let objPromise = new Promise ((resolve,reject)=>{
    console.log("This is promise Function :Check Buses are avilable to Tanjore Tommorow");
    resolve ("Producer => Resolved function: Buses are available");
    //reject ("Producer => Rejected function: Buses are not available");
});


// to consume both resolve and reject
// objPromise.then(
//     (val)=>{
//         console.log("Consumer =>Then Resolved Function : ", val);
//     },
//     (err)=>{
//         console.log("Consumer => Then Rejected Function : ", err);
//     }
// );

// //to consume error only

// objPromise.catch(
//     ()=>{
//         console.log("Bus availability-----",err);
//     }
// );

//Way 2: to consume both resolve and reject (by using both then and catch)
objPromise.then(
    (val)=>{
        console.log("Consumer =>Then Resolved Function : ", val);
    })
    .catch(
        (err)=>{
            console.log("Consumer => Then Rejected Function : ", err);
        }
    );
//Sample data to store initial Records

let data =[
    {name:"Vanaja", age:26},
    {name:"Valli", age:29},
];

//function to display in the table
function displayData(){
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML ="";

    data.forEach((value, index) =>{
       const row =`
       
       <tr>
          <td>${value.name} </td>
          <td>${value.age} </td>
          <td>
          <button class ="btn btn-info edit-btn" data-index = ${index}>Edit</button>
          <button class ="btn btn-danger delete-btn" data-index = ${index}>Delete</button>
          </td>
       </tr>`;
       dataRows.insertAdjacentHTML("beforeend",row);
    });
}

//Function to handle form submission
function handleFormsubmit(event){
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    const name = nameInput.value;
    const age = ageInput.value;

   // Add data to the array
    data.push({name, age});

    //clear form feild
    nameInput.value ="";
    ageInput.value = "";


    displayData();
}

//Attach event listner


displayData();
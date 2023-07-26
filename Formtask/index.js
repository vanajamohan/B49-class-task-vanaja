const form = document.getElementById("form");
const tablebody = document.getElementById("tableid");



form.addEventListener("submit",function (event) {

    event.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.querySelector("input[name='gender']:checked").value;
    const food = document.querySelectorAll(
        'input[name="food"]:checked'
    )
   const foodChoice = Array.form(food).map(
    (checkbox) => checkbox.value
   );
   if(foodChoice.length , 2){
    alert("Plese Select two");
    return;
   }

const newRow = table.insertRow();//document.createElement("tr");
const nameCol = newRow.insertCell()//document.createElement("td");
const genderCol = newRow.insertCell()//document.createElement("td");
const foodCol = newRow.insertCell()//document.createElement("td");

nameCol.textContent = name;
genderCol.textContent = gender;
foodCol.textContent = foodChoice.join(",");

form.reset();

});


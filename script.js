var addBtn = document.querySelector("#add");

var deleteFirstBtn = document.querySelector("#deletefirst");
var deleteLastBtn = document.querySelector("#deletelast");

addBtn.addEventListener('click', add);

deleteFirstBtn.addEventListener('click',  deleteFirst);
deleteLastBtn.addEventListener('click', deleteLast);

function add() {
    var firstName = document.querySelector("#firstname").value;
    var lastName = document.querySelector("#lastname").value;
    var age = document.querySelector("#age").value;
}

    // var table = document.querySelector("#myTable tbody");
    //     var row = table.insertRow();
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     var cell3 = row.insertCell(2);
    //     cell1.innerHTML = firstName;
    //     cell2.innerHTML = lastName;
    //     cell3.innerHTML = age;

        function add() {
            var firstName = document.querySelector("#firstname").value;
            var lastName = document.querySelector("#lastname").value;
            var age = document.querySelector("#age").value;
        
            if (!firstName || !lastName || !age) {
        
                alert("Įrašykite visus laukelius");
        
            } else if (parseInt(age) <= 0){
                alert("Pabandykite įvesti amžių dar kartą");
            }
            else{
                var table = document.querySelector("#myTable tbody");
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                cell1.innerHTML = firstName;
                cell2.innerHTML = lastName;
                cell3.innerHTML = age;
            }
        }
        
        function deleteFirst(){
            let table = document.getElementById("myTable");
            if(table.rows.length >1){
                table.deleteRow(1);
            }
        }
        
        function deleteLast(){
            let table = document.getElementById("myTable");
            if(table.rows.length >1){
                table.deleteRow(-1);
            }
        }
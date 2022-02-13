
let table = document.getElementById("myTable");

let myList = document.getElementById("info");


let submit = document.getElementById("submit");

submit.addEventListener("click", myFunction)

let myArray = []

function myFunction(){
    myArray.push(myList.value);
    console.log(myArray);
    
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
     
    cell1.innerHTML = myArray[myArray.length-1].split(" ")[0];
    cell2.innerHTML = myArray[myArray.length-1].split(" ")[2];
    cell3.innerHTML = myArray[myArray.length-1].split(" ")[3].slice(0, -1);
    cell4.innerHTML = myArray[myArray.length-1].split(" ")[4].slice(0, -1);
    cell5.innerHTML = myArray[myArray.length-1].split(" ")[5];
    
    myList.value = ""

}



/* for (let index = myArray.length -1; index >= 0 ; index--) {
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);


    cell1.innerHTML = myArray[index].split(" ")[0];
    cell2.innerHTML = myArray[index].split(" ")[2];
    cell3.innerHTML = myArray[index].split(" ")[3].slice(0, -1);
    cell4.innerHTML = myArray[index].split(" ")[4].slice(0, -1);
    cell5.innerHTML = myArray[index].split(" ")[5];

    } */



    /* 'C1234 - John Doe, London, Full-Stack',
    'C2345 - Jane Doe, London, Data-Science',
    'C2346 - Mary Ann, Paris, AWS-Devops',
    'C2347 - Adam Smith, Texas, AWS-Devops',
    'C2444 - Michael Great, Arizona, Full-Stack',
    'C2555 - William Cash, Manchester, Data-Science',
    'C2455 - Patrick Jane, Madrid, Full-Stack' */















const tableArray = document.createElement("table");
tableArray.id = "table";
for(let i = 1; i<12 + 1; i++){
    var tableElement = document.createElement("tr");
    tableArray.appendChild(tableElement);
    var numElement = document.createElement("td");
    numElement.textContent = [i];
    tableElement.appendChild(numElement);

}
document.body.appendChild(tableArray); 


for (var i = 0, row; row = tableArray.rows[i]; i++) {
    let textElement = row.innerText;
    row.style.textAlign = "center";
    if (textElement % 4 == 0){
        row.style.backgroundColor = "lightblue";
    }
}

// for (let row of tableArray.rows) {
//     let textElement = row.innerText;
//     if (textElement % 4 == 0){
//         row.style.backgroundColor = "lightblue";
//     }
// }




const tableNodes = () => {
    let htmlElements = document.getElementsByTagName("table");
    for(let i = 0; i< htmlElements.length; i++) {
        console.log(htmlElements[i]);
    }
  
}

tableNodes();

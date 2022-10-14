let num1 = prompt(`Please enter a number you would like to add:`)
let num2 = prompt(`Please enter another number you would like to add:`)

const n1Int = Number(num1);
const n2Int = Number(num2);

const paraElement = document.createElement("p");
const spanElement = document.createElement("span");
paraElement.id = "para";

if (Number.isInteger(n1Int) && Number.isInteger(n2Int)) {
    let numSum = n1Int + n2Int;
    let texts = (`${num1} + ${num2} = `);
    paraElement.textContent = (`${num1} + ${num2} = `);
    paraElement.style.fontWeight = 'bold';
    spanElement.textContent = (` ${numSum}`);
    spanElement.style.fontWeight = 'bold';
    spanElement.style.color = 'red';
    document.getElementById("content").appendChild(paraElement);
    document.getElementById("para").appendChild(spanElement);
    console.log(texts);
}
else {
    paraElement.textContent = "Error!";
    spanElement.textContent = (` You must enter integers. You entered "${num1}" and "${num2}". Try again.`);
    paraElement.style.fontWeight = 'bold';
    paraElement.style.color = 'red';
    spanElement.style.color = 'black';
    document.getElementById("content").appendChild(paraElement);
    document.getElementById("para").appendChild(spanElement);
}



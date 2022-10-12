let num1 = prompt(`Please enter a number you would like to add:`)
let num2 = prompt(`Please enter another number you would like to add:`)

const n1Int = Number(num1);
const n2Int = Number(num2);

const spanElement = document.createElement("span");

if (Number.isInteger(n1Int) && Number.isInteger(n2Int)) {
    let numSum = n1Int + n2Int; 
    let texts = (`${num1} + ${num2} = `);
    spanElement.textContent = (`${num1} + ${num2} = ${numSum}`);
    spanElement.style.fontWeight= 'bold';
    console.log(texts);
}
document.getElementById("content").appendChild(spanElement);
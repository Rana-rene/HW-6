const paragraphElement = document.getElementsByTagName("p");
for (let i = 0; i < paragraphElement.length; i++) {
    console.log(paragraphElement[i]);
    paragraphElement[i].style.backgroundColor = "yellow";
    paragraphElement[i].style.fontWeight = 'bold';
}
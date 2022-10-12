//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
    let htmlClass = document.getElementsByClassName("400level");
    for(let i = 0; i< htmlClass.length; i++) {
        console.log(htmlClass[i].textContent);
    }
}

displayText400();
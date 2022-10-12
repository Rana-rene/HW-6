//Complete the following functions
//Displays all body nodes

const bodyNodes = () => {
    let htmlElements = document.getElementsByTagName("body");
    for(let i = 0; i< htmlElements.length; i++) {
        console.log(htmlElements[i]);
    }
  
}

bodyNodes();

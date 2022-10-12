const linkElement = document.createElement("li");
linkElement.id = "COB";
var newAnchor = document.createElement("a");
newAnchor.textContent = "College of Business";
newAnchor.setAttribute('href', "https://www.csulb.edu/college-of-business");
linkElement.appendChild(newAnchor);
document.getElementById("links").insertBefore(linkElement, document.getElementById("is"));
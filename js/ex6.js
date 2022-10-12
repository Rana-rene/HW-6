const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

  const dictArray = document.createElement("dl");
  for(let x of words) {
    const headElement = document.createElement('dt');
    headElement.textContent = x.term;
    headElement.style.fontWeight = 'bold';
    const subElement = document.createElement("dd");
    subElement.textContent = x.definition;
    dictArray.appendChild(headElement);
    dictArray.appendChild(subElement);
  }

  document.getElementById("content").appendChild(dictArray); 


// const test = words.map(words => {
//               return {
//                 term: words.term,
//                 definition: words.definition
//               }
//             });

// console.log(test);
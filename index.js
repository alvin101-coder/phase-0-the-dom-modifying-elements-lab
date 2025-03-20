// Write your code here!
document.querySelector('main#main').remove();

//create a new <h1> element
const newHeader = document.createElement('h1');

// set the id of the <h1> to "victory"
newHeader.id = 'victory';

// Add text to the <h1>
newHeader.innerHTML = 'Alvin is the champion';

//Optionally, add the new <h1> to the DOM 
document.body.appendChild(newHeader);
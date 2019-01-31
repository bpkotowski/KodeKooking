// get color button nodes

const colorButtonsNode = document.getElementById('color-buttons');
// finds the node
                //console.log(colorButtons);

// create array of colors
const colors = [
    'blue',
    'green',
    'red',
    'yellow',
    'aqua',
    //can add more colors after loop has been created below
];

//create button elements, automating with a for loop

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];
    //console.log(color);
    const colorButtonNode = document.createElement('button');
                    //console.log(colorButtonNode);
    
    
    
    // add text, class, and value to button
    // append button to parent node
    colorButtonNode.textContent = color;
                      //console.log(colorButtonNode);
    colorButtonNode.value =color;
    colorButtonNode.classList.add('color-button');
    colorButtonNode.addEventListener('click', function() {
                    //console.log(colorButtonNode.value + ' clicked!');
    });
// referencing the parent and appending the node we are creating, child nodes
    colorButtonsNode.appendChild(colorButtonNode);

}   




// create button elements
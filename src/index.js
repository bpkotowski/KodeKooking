// get color button nodes

const colorButtonsNode = document.getElementById('color-buttons');  //* refers to html*/

console.log(colorButtonsNode);
// finds the node
                //console.log(colorButtons);
const canvasNode = document.getElementById('canvas');

// create array of colors
const colors = [ //*oblect, strings 0r key value pairs
    'blue',
    'green',
    'red',
    'yellow',
    'aqua',
    'chartreuse',
    //can add more colors after loop has been created below
];

const transFormButtonsNode = document.getElementById('transform-buttons');
//
console.log(transFormButtonsNode);

//create button elements, automating with a for loop
// loop that generates paint buttons and colors

for(let index = 0; index < colors.length; index++) {
    let color = colors[index];//*new varible equal to value of const
    //console.log(color);
    const colorButtonNode = document.createElement('button');//* captured and stored new elements, a node
                    //console.log(colorButtonNode);
    
    
    
    // add text, class, and value to button
    // append button to parent node
    colorButtonNode.textContent = color;//*updates node with information from const color object
                      //console.log(colorButtonNode);
    colorButtonNode.value = color;
    colorButtonNode.classList.add('color-button');
    colorButtonNode.addEventListener('click', function() {
        paint(color);
                    //console.log(colorButtonNode.value + ' clicked!');
    });
// referencing the parent and appending the node we are creating, child nodes
    colorButtonsNode.appendChild(colorButtonNode);
// call paint function
}
//create fucntion that creates shapes for canvas

function paint(color) {

    const colorBlock = document.createElement('span');
    colorBlock.classList.add(color);
    colorBlock.classList.add('color-block');
    canvasNode.appendChild(colorBlock);

    //console.log(colorBlock);

    canvasNode.appendChild(colorBlock);




}

//cut and pated form for loop above
//loop that generates transfoem buttons and optioons
for(let index = 0; index < colors.length; index++) {

    let color = colors[index];
    const colorTransformNode = document.createElement('button');    
    colorTransformNode.textContent = color;
    colorTransformNode.value = color;
    colorTransformNode.classList.add('transform-button', color);
    
    colorTransformNode.addEventListener('click', function() {
        circletransFormation(color);
        //console.log(colorButtonsNode);

       
    });
    
    transFormButtonsNode.appendChild(colorTransformNode);
}

function circletransFormation(color) {
    const selector = '.color-block.' + color;
    const colorBlocks = document.querySelectorAll(selector);
   // console.log(colorBlocks); //after clicking on button returns node list
   
   // below is adde code from Bonnie
    const allColorBlocks = document.querySelectorAll('.color-block');//*from Bonnie
    
    for(let index = 0; index < allColorBlocks.length; index++) {
        allColorBlocks[index].classList.remove('transform');//*from Bonnie
    }
    for(let index = 0; index < colorBlocks.length; index++) {
        colorBlocks[index].classList.add('transform');
    }
    
}

       //calls paint function
        
         






  




        // create button elementts
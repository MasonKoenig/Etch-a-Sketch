function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function nextChar(startChar, increment) {
  return String.fromCharCode(startChar.charCodeAt(0) + increment);
}

function makeGrid(numUnits) {
  let startChar = 65;
  for(let i = 0; i < numUnits; i++) {
    let row = document.createElement('div');
    row.className = `row`
    container.append(row);
    for(let i = 1; i <= numUnits; i++) {
      let div = document.createElement('div');
      div.className = `box`
      row.append(div);
    }
    startChar++
  }    
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function hoverEffect() {
  const box = document.querySelectorAll('.box');
  box.forEach(e => {
    e.addEventListener('mouseenter', () => {
      e.style.backgroundColor = 'grey';
  })
})
}

//Create Container to contain grid
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

//Define Grid size, create
let gridSize = 100;
makeGrid(gridSize);
hoverEffect();

//Controls
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetBtn.style.margin = '10px';
resetBtn.style.paddingInline = '10px';
container.parentNode.insertBefore(resetBtn, container);
resetBtn.addEventListener('click', () => {
  removeChildNodes(container);
  gridSize = window.prompt('Enter grid size.', 16);
  makeGrid(gridSize);
  hoverEffect();
})


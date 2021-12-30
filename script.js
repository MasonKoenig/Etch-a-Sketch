function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const container = document.createElement('div');
container.id = 'container';
document.body.append(container);

for(let i = 0; i < 16; i++) {
  let div = document.createElement('div');
  div.id = `cell${i}`
  container.append(div);
}

console.log(container)

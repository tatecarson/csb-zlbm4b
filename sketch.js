/* eslint-disable no-undef, no-unused-vars */

// tool: https://grid.layoutit.com/

function setup() {
  const grid = createDiv().class("grid-container");

  const header = createDiv("Header").class("item1").parent(grid);

  const menu = createDiv().class("item2").parent(grid);

  for (let i = 0; i < 10; i++) {
    createSlider("sup").parent(menu);
  }

  const main = createDiv().class("item3").parent(grid);

  for (let i = 0; i < 10; i++) {
    createCheckbox().parent(main);
  }

  const right = createDiv().class("item4").parent(grid);

  for (let i = 0; i < 7; i++) {
    createButton("hi").parent(right);
  }

  const footer = createDiv().class("item5").parent(grid);
}

function draw() {}

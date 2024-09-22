document.addEventListener('DOMContentLoaded', function() {
const box = document.querySelector('.box');
const sketch = document.createElement('div');
const square = document.createElement('div');


sketch.style.cssText = "width: 600px; height: 600px; max-height : 604px; display : flex; flex-flow: row wrap; border : 1px dotted black; font-size : 0;";
sketch.classList.add("sketch");
box.appendChild(sketch);

square.classList.add("square");
let numberOfPx = 100;
let css = "" + 602 / numberOfPx + "px ;";
square.style.cssText = "height: " + css + "width: " +css + "flex: 0 1 auto; line-height: 0px;";

for(let i = 0; i < numberOfPx * numberOfPx; i++) {
    sketch.appendChild(square.cloneNode(1));
}

const sq = document.querySelectorAll('.square');

sq.forEach((div) => {
    div.addEventListener('mouseover', function() {
        div.style.background = "black";
    })
})

});


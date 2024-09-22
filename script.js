document.addEventListener('DOMContentLoaded', function() {
    const box = document.querySelector('.box');
    const sketch = document.createElement('div');
    const square = document.createElement('div');

    sketch.style.cssText = "background: black; width: 600px; height: 600px; max-height: 600px; display: flex; flex-flow: row wrap; border: 1px dotted black; font-size: 0;";
    sketch.classList.add("sketch");
    box.appendChild(sketch);

    const add = document.querySelector('.add');
    let number;

    square.classList.add("square");
    let numberOfPx = 100;
    let css = 600 / numberOfPx + "px";
    square.style.cssText = "height: " + css + "; width: " + css + "; flex: 0 1 auto; line-height: 0px; background: black;";

    function createSquares(numberOfPx) {
        sketch.innerHTML = ''; // Clear the sketch container
        let css = 600 / numberOfPx + "px";
        square.style.cssText = "height: " + css + "; width: " + css + "; flex: 0 1 auto; line-height: 0px; background: black;";

        for (let i = 0; i < numberOfPx * numberOfPx; i++) {
            const newSquare = square.cloneNode(true);
            sketch.appendChild(newSquare);
        }

        attachEventListeners();
    }

    function attachEventListeners() {
        const squares = document.querySelectorAll('.square');

        squares.forEach((div) => {
            div.addEventListener('mouseover', function() {
                div.style.background = "white";
            });
        });

        const erase = document.querySelector('.eraser');
        const eraser = document.querySelector('.format');
        const blue = document.querySelector('.blue');
        const green = document.querySelector('.green');
        const white = document.querySelector('.white');
        const red = document.querySelector('.red');

        erase.addEventListener('click', function() {
            squares.forEach((div) => {
                div.addEventListener('mouseover', function() {
                    div.style.background = "black";
                });
            });
        });

        eraser.addEventListener('click', function() {
            squares.forEach((div) => {
                div.style.background = "black";
            });
        });

        blue.addEventListener('click', function() {
            squares.forEach((div) => {
                div.addEventListener('mouseover', function() {
                    div.style.background = "blue";
                })
            })
        })
        
        green.addEventListener('click', function() {
            squares.forEach((div) => {
                div.addEventListener('mouseover', function() {
                    div.style.background = "green";
                })
            })
        })
        
        white.addEventListener('click', function() {
            squares.forEach((div) => {
                div.addEventListener('mouseover', function() {
                    div.style.background = "white";
                })
            })
        })
        
        red.addEventListener('click', function() {
            squares.forEach((div) => {
                div.addEventListener('mouseover', function() {
                    div.style.background = "red";
                })
            })
        })
    }

    createSquares(numberOfPx);

    add.addEventListener('click', function() {
        do {
            numberOfPx = prompt("Injiza igiharuro kiri hagati ya 10 n' 100 : ");
        } while (numberOfPx < 10 || numberOfPx > 100);

        createSquares(numberOfPx);
    });
});

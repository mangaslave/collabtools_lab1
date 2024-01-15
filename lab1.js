"use strict";
function distanceCalculator(x1, x2, y1, y2) {
    const x = x2 - x1;
    const y = y2 - y1;
    const xSquare = Math.pow(x, 2);
    const ySquare = Math.pow(y, 2);
    const result = Math.sqrt(xSquare + ySquare);
    return result;
}
console.log(distanceCalculator(1, 5, 1, 4));

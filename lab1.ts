
function distanceCalculator( x1: number, x2: number, y1: number, y2: number ) {
    const x: number = x2 - x1;
    const y: number = y2 - y1;

    const xSquare: number = Math.pow( x, 2 );
    const ySquare: number = Math.pow( y, 2 );

    const result: number = Math.sqrt( xSquare + ySquare);
    return result;
}

console.log(distanceCalculator( 1, 5, 1, 4 ));
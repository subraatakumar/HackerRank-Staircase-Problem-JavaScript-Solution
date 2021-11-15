'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let string = "";
    for(let i=1; i<=n; i++){
        string = "";
        for(let j=1; j<=n-i; j++){
            string += " ";
        }
        for(let j=1; j<=i; j++){
            string += "#";
        }
        console.log(string);
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}

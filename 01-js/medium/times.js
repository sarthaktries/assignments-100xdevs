/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let beforeTime = new Date();
    calculation(n);
    let afterTime = new Date();

    let diffTime = afterTime - beforeTime;
    return diffTime / 1000;
}

function calculation(n) {
    let sum = 0;
    for (let x = 1; x <= n; x++) {
        sum = sum + x;
    }
}

let tests = [100000, 10000000, 1000000000, 10000000000];
for (let cases of tests) {
    console.log(calculateTime(cases) + " Sec");
}

/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function myAsync(n) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, n);
    });
}

async function callback(n) {
    const check = await myAsync(n);
    return check;
}

function sleep(milliseconds) {
    return callback((milliseconds));
}

module.exports = sleep;

/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
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

function wait(n) {
    return callback((n * 1000) + 100);
}

module.exports = wait;

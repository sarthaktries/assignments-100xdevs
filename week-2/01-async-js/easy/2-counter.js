// Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second, Without using setInterval

function myAsync() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, 1000);
    });
}

async function callBack() {
    let x = 1;
    while(x != 0) {
        await myAsync();
        console.log(x);
        x += 1;
    }
}

callBack();


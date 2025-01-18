const fs = require("fs");

fs.readFile("3-file.txt", "utf-8", (err, data) => {
    console.log(data);
});

// The data from txt file is not displayed until sum is dsiplayed 
// This is because fs.readFile is Asynchronous and have to wait till the main js thread is free 
let sum = 0;
for (let x = 0; x < 3000000000; x++) {
    sum = sum + x;
}
console.log(sum);
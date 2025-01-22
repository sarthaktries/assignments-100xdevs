const fs  = require("fs");

fs.writeFile("4-file.txt", "Hello World this is an Async Function", (err) => {
    if (err) {
        throw err;
    }
});
console.log("First print");

fs.readFile("4-file.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("Second print");
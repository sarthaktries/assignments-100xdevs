const fs  = require("fs");
function myReadFile() {
    return new Promise((resolve) => {
        fs.readFile("test.txt", "utf-8", (err, data) => {
            resolve(data);
        });
    });
}

let sum = 0;
for (let x = 1; x < 100000; x++) {
    sum = sum + x;
}
console.log(sum);

async function fileData() {
    let answer = await myReadFile();
    console.log(answer);
    console.log(sum);
}

fileData();
const fs = require("fs");

function replaceSpaces(fileName) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        data = data.replace(/[^\S\r\n]+/g, " ").trim();
        fs.writeFile(fileName, data, (err) => {
            console.log("File Updated!");
        });
    });
}

replaceSpaces("1-file.txt");
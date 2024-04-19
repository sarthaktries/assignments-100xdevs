// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");

let raw = "My system is filled with Bits and Bytes";

fs.writeFile("4-sometext.txt", raw, (err) => {
    console.log("Updated!");
});
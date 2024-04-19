// Hello            World      programmed      to     work      and not to                 feel
// not even            sure    is   this    is real    !     !
//
// Bits       &            Bytes    .


const fs = require("fs");


function myReadAndWriteFile() {
    fs.readFile("1-sometext.txt", "utf-8", (err, data) => {
        data = data.replace(/[^\S\r\n]+/g, " ");
        myWriteFile(data);
    });
}

function myWriteFile(data) {
    fs.writeFile("1-sometext.txt", data, (err) => {
        console.log("File Updated!");
    });
}


myReadAndWriteFile()



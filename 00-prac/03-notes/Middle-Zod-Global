const z = require("zod");
const express = require("express");
const app = express();
const port = 3000;




let requests = 0;
function reqCount(req, res, next) {
    requests = requests + 1;
    console.log("Number of Requests: ", requests);
    next();
}

let initTime;
function responseTimeInit(req, res, next) {
    initTime = new Date().getTime();
    next();
}

let endTime;
function responseTimeEnd(req, res) {
    endTime = new Date().getTime();
    console.log("Final Time: ", endTime - initTime);
}

function userValidator(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "Sarthak" || password != "Gupta") {
        return res.status(403).json({msg: "User does not Exists!"});
    }
    next();
}

function idValidator(req, res, next) {
    const userIdInput = z.literal("1").or(z.literal("2"));
    const userId = req.query.userId;
    const userIdValidation = userIdInput.safeParse(userId);
    if (!userIdValidation.success) {
        return res.status(403).json({msg: "Invalid UserId!"});
    }
    next();
}




app.use(express.json());




app.get("/check", reqCount, responseTimeInit, userValidator, idValidator, (req, res, next) => {
    let sum = 0;
    for(let x = 0; x < 1000000000; x++) {
        sum = sum * x;
    }
    res.send("You are in bro!");
    next();
}, responseTimeEnd);

app.post("/checkup", (req, res) => {
    // Kidneys = [1, 2]
    const Kidneys = req.body.Kidneys;
    const kidneyLength = Kidneys.length;
    res.send("Your kidney lenght is: " + kidneyLength);
});




// Global Catch
app.use(function(err, req, res, next) {
    res.json({msg: "Somethings up with your server!"});
});




app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
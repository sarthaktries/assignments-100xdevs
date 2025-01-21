const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

user_data = {
    "sarthak": {1: "healthy", 2: "healthy"},
    "diya": {1: null, 2: "healthy"},
    "prisha": {1: "healthy", 2: null},
    "garvit": {1: "healthy", 2: "unhealthy"},
    "morty": {1: "unhealthy", 2: "healthy"}
}

function checkUser(patient) {
    if (patient == undefined) {
        return 1;
    }
    const small = patient.toLowerCase();
    for (let user in user_data) {
        if (user == small) {
            return user_data[user];
        }
    }
    return 2;
}

function checkKidney(patient, which) {
    if (user_data[patient][which] == null)  {
        user_data[patient][which] = "healthy";
        return 1;
    }
    return 2;
}

function checkUnhealthyKidney(patient, which) {
    if (user_data[patient][which] == "unhealthy")  {
        user_data[patient][which] = "healthy";
        return 1;
    }
    return 2;
}

function kidneyRemoval(patient, which) {
    if (user_data[patient][which] == "unhealthy")  {
        user_data[patient][which] = null;
        return 1;
    }
    return 2;
}

app.get("/", (req, res) => {
    const patient = req.query.patient;
    const data = checkUser(patient);
    if (data == 1) {
        return res.send(`You have not entered patient name`);
    }
    if (data == 2) {
        return res.send(`Invalid patient name`);
    }
    return res.send(`Welcome ${patient} \n Kidney 1: ${data[1]} \n Kidney 2: ${data[2]}`);
});

app.post("/", (req, res) => {
    const patient = req.query.patient;
    const which = parseInt(req.query.which);
    const data = checkUser(patient);
    if (data == 1 || data == 2) {
        return res.send("Authentication Failed!");
    }
    if (which != 1 && which != 2) {
        return res.send("Kidney not specified");
    }
    const inserting = checkKidney(patient, which);
    if (inserting == 2) {
        return res.send("Already a kidney inside!");
    }
    return res.send("Procedure Done!");
})

app.put("/", (req, res) => {
    const patient = req.query.patient;
    const which = parseInt(req.query.which);
    const data = checkUser(patient);
    if (data == 1 || data == 2) {
        return res.send("Authentication Failed!");
    }
    if (which != 1 && which != 2) {
        return res.send("Kidney not specified");
    }
    const inserting = checkUnhealthyKidney(patient, which);
    if (inserting == 2) {
        return res.send("No Unhealthy Kidney found!");
    }
    return res.send("Procedure Done!");
});

app.delete("/", (req, res) => {
    const patient = req.query.patient;
    const which = parseInt(req.query.which);
    const data = checkUser(patient);
    if (data == 1 || data == 2) {
        return res.send("Authentication Failed!");
    }
    if (which != 1 && which != 2) {
        return res.send("Kidney not specified");
    }
    const inserting = kidneyRemoval(patient, which);
    if (inserting == 2) {
        return res.send("No Unhealthy Kidney found!");
    }
    return res.send("Kidney Removed");
});


app.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});
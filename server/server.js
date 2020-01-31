class User {
    constructor(name, pass) {
        this.name = name;
        this.pass = pass;
    }
}
const express = require("express");
const localStorage = require("localStorage");
const app = express();
const port = 3000;
let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
app.use("/app", express.static("../client"));
app.get(
    "/login",
    function (req, res) {
        let candidatUSER = req.query["user"];
        let candidatPASS = req.query["password"];
        let find = false;
        let passed = false;
        let need = true;
        users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === candidatUSER) {
                find = true;
                if (candidatPASS === users[i].pass) {
                    passed = true;
                    res.status = 200;
                    res.send("you can came in");
                    res.end("Allrighht");
                    need = false;
                }

            }
        }
        if (need) {
            if (find == false) {
                users.push(new User(candidatUSER, candidatPASS))
                localStorage.setItem('users', JSON.stringify(users));
                res.status = 200;
                res.send("NEW USER");
                res.end("Allrighht");
            }
            else if (passed == false) {
                res.status = 201;
                res.send("Wrong pass");
                res.end("Allrighht");
            }
        }
    }.bind(this)
);
app.get(
    "/message",
    function (req, res) {
        itemsArray.push(JSON.parse(req.query["message"]));
        localStorage.setItem('items', JSON.stringify(itemsArray));
        res.status = 200;
        res.send("got it");
        res.end("Allrighht");
    }.bind(this)
);
app.get(
    "/init",
    function (req, res) {
        res.send(localStorage.getItem('items'));
        res.end("Allrighht");
    }.bind(this)
);
app.listen(port, () => console.log(`Server vstal on port ${port}!`));

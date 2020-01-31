//import { User } from "./user";

const express = require("express");
const localStorage = require("localStorage");
const app = express();
const port = 3000;
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
app.use("/app", express.static("../client"));
app.get(
    "/login",
    function (req, res) {
        if (req.query["user"] == "admin" && req.query["password"] == "admin") {
            res.status = 200;
            res.send("you can came in");
            res.end("Allrighht");
        } else {
            res.status = 201;
            res.send("you cant came in");
            res.end("!Allrighht");
        }
    }.bind(this)
);
app.get(
    "/message",
    function (req, res) {
        itemsArray.push(JSON.parse(req.query["message"]));
        localStorage.setItem('items', JSON.stringify(itemsArray));
        console.log(itemsArray)
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

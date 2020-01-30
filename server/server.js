//import { User } from "./user";

const express = require("express");
const app = express();
const port = 3000;

//var mysql = require("mysql");

app.use("/app", express.static("../client"));

app.get(
    "/app",
    function (req, res) {
        console.log(req.query)
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

app.listen(port, () => console.log(`Server vstal on port ${port}!`));

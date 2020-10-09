const app = require("express").Router();
const path = require("path");

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "exercise.html"));
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "stats.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
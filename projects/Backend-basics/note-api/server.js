const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

let notes = [{ id: 1, title: "First note", content: "Hello world" }];
let nextId = 2;

app.get("/", (req, res) => {
  res.send("hello form express");
});

app.get("/notes", (req, res) => {
  res.send(notes);
});
app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.send(notes.filter((item) => item.id === +id));
});

app.post("/notes", (req, res) => {
  req.body.id = nextId;
  notes.push(req.body);
  nextId++;
  res.redirect("/notes");
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.send(notes.filter((item) => item.id !== +id));
});

app.put("/notes/:id", (req, res) => {
  const id = req.params.id;
  res.send(notes.filter((item) => item.id === +id));
});
app.listen(port, () => {
  console.log("your server run on " + port);
});

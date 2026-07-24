require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");

    const noteSchema = new mongoose.Schema({
      title: String,
      content: String,
      createdAt: { type: Date, default: Date.now },
    });

    const Note = new mongoose.model("Note", noteSchema);

    app.get("/notes", async (req, res) => {
      const notes = await Note.find();
      res.send(notes);
    });

    app.get("/notes/:id", async (req, res) => {
      const id = req.params.id;
      const note = await Note.findById(id);
      res.send(note);
    });

    app.post("/notes", async (req, res) => {
      await Note.create({ title: "New Note", content: "some new content" });
      res.redirect("/notes");
    });

    app.put("/notes/:id", async (req, res) => {
      const id = req.params.id;
      await Note.findByIdAndUpdate(id, { title: "new update" });
      const notes = await Note.find();
      res.send(notes);
    });

    app.delete("/notes/:id", async (req, res) => {
      const id = req.params.id;
      await Note.findByIdAndDelete(id);
      const notes = await Note.find();
      res.send(notes);
    });
  } catch (err) {
    console.log(err.message);
  }
}
main();

app.get("/", (req, res) => {
  res.send("hello form express");
});

// app.put("/notes/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(notes.filter((item) => item.id === +id));
// });
app.listen(port, () => {
  console.log("your server run on " + port);
});

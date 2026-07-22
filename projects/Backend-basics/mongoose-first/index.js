require("dotenv/config");
const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");

    const noteSchema = new mongoose.Schema({
      title: String,
      content: String,
      createdAt: { type: Date, default: Date.now },
    });

    const Note = mongoose.model("Note", noteSchema);

    const newNote = await Note.create({ title: "data", content: "more data" });

    const notes = await Note.find();
    console.log(notes);
  } catch (err) {
    console.error(err.message);
  } finally {
    await mongoose.connection.close();
    console.log("connection closed");
  }
}

main();

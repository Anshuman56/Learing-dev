require("dotenv/config");
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conneced");
    const userSchema = await mongoose.Schema({
      email: { type: String, require: true, uniqe: true, lowercase: true },
      passwordHash: { type: String, require: true },
      createdAt: { type: Date, default: Date.now },
    });

    const User = await mongoose.model("User", userSchema);

    app.post("/register", async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.find({ email: email });

        if (user.length !== 0) res.status(400).json({ error: "Email Taken" });
        else {
          const hash = await bcrypt.hash(password, 10);

          await User.create({ email: email, passwordHash: hash });
          res.status(201).json({ message: "user Create" });
        }
      } catch (err) {
        console.error(err.message);
      }
    });

    // const compare = await bcrypt.compare("helo", hash);
    // console.log(compare);
  } catch (err) {
    console.error(err.message);
  }
}

main();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("The server run on " + port);
});

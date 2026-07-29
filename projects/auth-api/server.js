require("dotenv/config");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected");

    const userSchema = new mongoose.Schema({
      email: { type: String, unique: true },
      password: String,
    });

    const User = new mongoose.model("User", userSchema);

    app.post("/register", async (req, res) => {
      try {
        const email = req.body.email;
        const user = await User.find({ email: email });

        if (user.length !== 0) {
          return res.status(400).json({ error: "Email taken" });
        } else {
          const hash = await bcrypt.hash(req.body.password, 10);
          await User.create({ email: email, password: hash });
          res.status(201).json({ message: "User Created" });
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
      }
    });

    app.post("/login", async (req, res) => {
      try {
        const email = req.body.email;
        const user = await User.find({ email: email });

        if (user.length === 0) {
          return res.status(401).json({ error: "Invalid credentials" });
        } else {
          const isMatch = await bcrypt.compare(
            req.body.password,
            user[0].password,
          );
          if (isMatch) {
            const token = jwt.sign(
              { userId: user[0]._id },
              process.env.JWT_SECRET,
              { expiresIn: "1day" },
            );
            res.send(token);
          } else {
            return res.status(401).json({ error: "Invalid credentials" });
          }
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
      }
    });
  } catch (err) {
    console.error(err.message);
  }
}
main();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log("server run in " + port);
});

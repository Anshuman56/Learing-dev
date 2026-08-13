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

        if (user.length !== 0)
          return res.status(400).json({ error: "Email Taken" });
        else {
          const hash = await bcrypt.hash(password, 10);

          await User.create({ email: email, passwordHash: hash });
          res.status(201).json({ message: "user Create" });
        }
      } catch (err) {
        console.error(err.message);
      }
    });

    app.post("/login", async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await User.find({ email: email });
        console.log(user);
        if (user.length === 0)
          return res.status(401).json({ error: "Invalid Credentials" });
        else {
          const passwordHash = user[0].passwordHash;
          const compare = await bcrypt.compare(password, passwordHash);
          if (!compare)
            return res.status(401).json({ error: "Invalid Credentials" });
          else {
            const playload = { userId: user[0]._id };
            const token = jwt.sign(playload, process.env.MY_SECRET, {
              expiresIn: "1d",
            });
            res.status(200).json({ token: token });
          }
        }
      } catch (err) {
        console.error(err.message);
      }
    });
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

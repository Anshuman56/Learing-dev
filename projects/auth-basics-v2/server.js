require("dotenv/config");
const bcrypt = require("bcryptjs");
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { use } = require("react");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("conneced");
    const userSchema = await mongoose.Schema({
      email: { type: String, require: true, uniqe: true },
      passwordHash: { type: String, require: true },
      createdAt: { type: Date, default: Date.now },
    });

    const User = await mongoose.model("User", userSchema);
    const hash = await bcrypt.hash("hello", 10);
    console.log(hash);
    const compare = await bcrypt.compare("helo", hash);
    console.log(compare);
  } catch (err) {
    console.error(err.message);
  }
}

main();

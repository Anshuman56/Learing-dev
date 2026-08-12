const jwt = require("jsonwebtoken");
require("dotenv/config");

const payload = {
  userId: 101,
  userName: "Andshuman",
  roal: "admin",
};

const token = jwt.sign(payload, process.env.MY_SECRET, { expiresIn: "1h" });
console.log(token);

const decode = jwt.decode(token + "e", process.env.MY_SECRET);
console.log(decode);

const verify = jwt.verify(token + "e", process.env.MY_SECRET);
console.log(verify);

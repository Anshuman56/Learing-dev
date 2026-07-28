require("dotenv/config");
const jwt = require("jsonwebtoken");
const token = jwt.sign(
  { userId: 42, name: "Anshuman" },
  process.env.JWT_SECRET,
  {
    expiresIn: "1hr",
  },
);

const verifyed = jwt.verify(token, process.env.JWT_SECRET);
console.log(verifyed);

const decode = jwt.decode(token);
console.log(decode);

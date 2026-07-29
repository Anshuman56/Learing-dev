require("dotenv/config");
const jwt = require("jsonwebtoken");
let token = jwt.sign({ userId: 42, name: "Anshuman" }, process.env.JWT_SECRET, {
  expiresIn: "1hr",
});
console.log(token);

token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQyLCJuYW1lIjoiQW5zaG1hbiIsImlhdCI6MTc4NTIxNzU2MiwiZXhwIjoxNzg1MjIxMTYyfQ.Q16Kb7qZCCmS7l0ZopSjDi4uV0jWvFVHyfjI-3fJJp8";
const verifyed = jwt.verify(token, process.env.JWT_SECRET);
console.log(verifyed);

const decode = jwt.decode(token);
console.log(decode);

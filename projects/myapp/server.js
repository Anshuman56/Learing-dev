const express = require("express");
const app = express();
const port = 3000;

// parse requests with a Content-Type of application/json
app.use(express.json());

app.post("/profile", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(3000, () => {
  console.log(`app is running on ${port}`);
});

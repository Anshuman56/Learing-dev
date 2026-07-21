const express = require("express");
const app = express();
const port = 3000;
let counter = 0;

function logger(req, res, next) {
  counter++;
  console.log(
    `[${new Date().toLocaleString()}] ${req.originalUrl} ${req.method}`,
  );
  console.log("[Counter] Request #" + counter);
  next();
}

function authMiddleware(req, res, next) {
  if (req.header("x-api-key") === "secret123") {
    console.log("[Auth] Checking API key... allowed");
    next();
  } else res.sendStatus(401).json({ error: "Unauthorized" });
}

function timeing(req, res, next) {
  const start = Date.now();
  res.on("finish", () => {
    const time = Date.now() - start;
    console.log("[Timing] Request took " + time + "ms");
  });
  next();
}

app.use(logger);
app.use("/portected", authMiddleware);
app.use(timeing);

app.get("/portected", (req, res) => {
  console.log("Route handler runs");
  res.send("hello from protected");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server running on " + port);
});

const jwt = require("jsonwebtoken");
function authRequired(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ error: "no token provided" });

  const token = authToken.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decode.userId;
    next();
  } catch (err) {
    return res.status(401).send({ error: "Invalid Token" });
  }
}

module.exports = authRequired;

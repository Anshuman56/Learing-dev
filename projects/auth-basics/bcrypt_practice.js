const bcrypt = require("bcrypt");
const saltRounds = 10;
bcrypt.hash("kalia", saltRounds, function (err, hash) {
  console.log(hash);
  bcrypt.compare("kalia", hash, function (err, result) {
    // result == true
    console.log(result);
  });
});

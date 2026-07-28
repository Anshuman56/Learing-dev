const bcrypt = require("bcrypt");
const saltRounds = 10;
async function main() {
  const hash = await bcrypt.hash("kalia", saltRounds);

  const result = await bcrypt.compare("kala", hash);
  console.log({ hash, result });
}

main();

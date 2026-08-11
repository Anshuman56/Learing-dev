const bcrypt = require("bcryptjs");
async function main() {
  try {
    const hash = await bcrypt.hash("hello", 10);
    console.log(hash);
    const compare = await bcrypt.compare("helo", hash);
    console.log(compare);
  } catch (err) {
    console.error(err.message);
  }
}

main();

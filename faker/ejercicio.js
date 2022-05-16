const fs = require("fs");
const { faker } = require("@faker-js/faker");
names = "";
for (let i = 0; i < 1000; i++) {
  names += faker.name.findName() + "\n";
}
try {
  fs.writeFileSync("names.txt", names);
  console.log("file names has been create");
} catch (err) {
  console.log("We had an error while the it happened the process");
}

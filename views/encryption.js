let bcrypt = require("bcryptjs");

let pass = "secret pass";

console.log(pass);

let encrypt = bcrypt.hashSync(pass, bcrypt.genSaltSync(), null);

console.log(encryptPass);

if (bcrypt.compareSync("cheating pass", encryptPass)) {
  console.log("success in ");
} else {
  console.log("denied");
}

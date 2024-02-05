const jwt = require("jsonwebtoken");

function sign(data) {
  return jwt.sign(data, "my temporal secret");
}

// function sing(data) {
//  return jwt.sign(data, "my temporal secret");
// }

module.exports = { sign };

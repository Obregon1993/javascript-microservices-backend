const ctrl = require("./controller");
const config = require("../../../config");
//const store = require("../../../store/mysql");
// const store = require("../../../store/dummy");

let store;
if (config.remoteDB) {
  store = require("../../../store/remote-mysql");
} else {
  store = require("../../../store/mysql");
}

module.exports = ctrl(store);

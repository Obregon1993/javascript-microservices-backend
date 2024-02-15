// const auth = require("../auth");
// const { v4: uuidv4 } = require("uuid");
const TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  // function remove(id) {
  //   return store.get(TABLE, id);
  // }

  return { list, get };
};

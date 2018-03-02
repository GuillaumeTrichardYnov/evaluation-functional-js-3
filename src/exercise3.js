const _ = require("lodash");

const meeteek = input => {
  // Your future job begins here ...
  input.reduce((acc, current) => {
    acc[current.firstname] = [];
  }, {})
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};

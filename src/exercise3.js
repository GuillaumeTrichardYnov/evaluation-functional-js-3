const _ = require("lodash");

const meeteek = input => {

function intersect(a, b) {
    var t;
    if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}
  // Your future job begins here ...
  return input.reduce((acc, current, index, array) => {
    acc[current.firstname] = [];
    array.forEach(x => {
      if(x.firstname != current.firstname)
      {
        if(x.sexPartnerApproved.includes(current.sex) && current.sexPartnerApproved.includes(x.sex))
        {
          if(intersect(x.interests, current.interests)){
            acc[current.firstname].push(x);
          }
        }
      }

    })
    return acc;
  }, {})
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};

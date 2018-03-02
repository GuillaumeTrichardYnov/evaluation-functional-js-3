const moment = require("moment");

const sortProduct = input => {
  // Your future job begins here ...
  return input.reduce((acc, current) => {
    var obj = {
      monthOfYear : moment(current.dateAdded).month()+1,
      name : current.name,
      year : moment(current.dateAdded).year(),
      quantity : current.quantity
    }
    if(acc){
      if(obj.year > 2000){
        if(acc.hasOwnProperty(current.name)){
            acc[current.name].push(obj);
            acc[current.name].sort(function(a, b){return a.monthOfYear - b.monthOfYear})
            acc[current.name].sort(function(a, b){return a.year - b.year})
        }else{
            acc[current.name] = [obj];
        }
      }
    }
    return acc;
  }, {})
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};

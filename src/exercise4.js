const countSequence = (sequence, input) => {
  // Your future job begins here ...
  if(input == "" || sequence == "")
  {
    return 0;
  }
  if(!input){
      return function(input){
          return (input.match(/11/g)|| []).length;
      };
  }else {
      return (input.match(/11/g)|| []).length;
  }
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};

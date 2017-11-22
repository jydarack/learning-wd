
function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  var myArray = args.shift(args);
  var answer = myArray.filter(function(word){
    return !args.includes(word);
  });

  return answer;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

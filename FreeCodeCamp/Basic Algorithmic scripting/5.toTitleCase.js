
function titleCase(str) {
  var splitArray = str.split(' ');
  for (var i = 0; i<splitArray.length; i++){
    splitArray[i] = splitArray[i].charAt(0).toUpperCase()+ splitArray[i].substr(1).toLowerCase();
  }
  return splitArray.join(' ');
}

titleCase("I'm a little tea pot");

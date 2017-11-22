
function mutation(arr) {
  var base = arr[0].toLowerCase().split("");
  var key = arr[1].toLowerCase().split("");

  for(var i=0; i<key.length; i++){
    if(!base.includes(key[i])){
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hello"]);

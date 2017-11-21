
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // true if the target.length last segment is same as target
  // get the final part of the str
  var ending = str.substr(str.length-target.length);
  if(ending==target){
    return true;
  }else{
    return false;
  }

}

confirmEnding("Bastian", "n");

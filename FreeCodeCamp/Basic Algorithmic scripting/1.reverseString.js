
function reverseString(str) {
  var rts = "";
  for (var i=str.length-1; i>=0;i--){
    rts += str[i];
  }
  return rts;
}

reverseString("hello");

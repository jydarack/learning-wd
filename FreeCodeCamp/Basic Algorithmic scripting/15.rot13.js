
function rot13(str) { // LBH QVQ VG!
  var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!.';
  var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLM ?!.';

  var answer = "";
  for(var i=0; i<str.length;i++){
    answer+= output[input.indexOf(str[i])];
  }
  return answer;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var answer = [];
  for (var i=0; i<arr.length; i++){
    if(!isBK(arr[i])){
      answer.push(arr[i]);
    }
  }
  return answer;
}

function isBK(item){
  var blackList = [false, null, 0, "", undefined, NaN];
  return blackList.includes(item);
}

bouncer([7, "ate", "", false, 9]);

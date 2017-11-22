
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var answer = [];
  while(arr.length) {
    answer.push(arr.splice(0,size));
  }
  return answer;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

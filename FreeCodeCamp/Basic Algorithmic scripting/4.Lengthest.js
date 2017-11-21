
function findLongestWord(str) {
  var splitArray = str.split(' ');
  var answer = 0;

  for (var i=0; i<splitArray.length; i++){
    if(answer < splitArray[i].length){
      answer = splitArray[i].length;
    }
  }
  return answer;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

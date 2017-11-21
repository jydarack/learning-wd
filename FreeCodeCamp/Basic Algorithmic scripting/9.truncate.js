
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var answer = "";

  if(str.length <= 3 || num <3){
    answer = str.slice(0, num) +"...";
  }else if(str.length>num){
    answer = str.slice(0, num-3) + "...";
  }else if(str.length <= num) {
    answer = str;
  } else{
    answer = num+str.slice(0, num-3) +"...";
  }
  return answer;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+2);

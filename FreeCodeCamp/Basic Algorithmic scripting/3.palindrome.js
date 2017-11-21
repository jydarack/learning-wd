
function palindrome(str) {
  // Good luck!
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  var reverse = str.split("").reverse().join("");
  if(str == reverse){
    return true;
  }else{
    return false;
  }

}

palindrome("eye");

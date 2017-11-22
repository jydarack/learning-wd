
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var myArray = arr;
  myArray.push(num);
  myArray.sort(function compareNumbers(a, b) {
    return a - b;
  });
  return myArray.indexOf(num);
}

getIndexToIns([3, 10, 5], 3);


function largestOfFour(arr) {
  // You can do this!
  for (var i=0; i<arr.length; i++){
    arr[i] = Math.max.apply(null, arr[i]);
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

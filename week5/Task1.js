function reverseArray(arr) {
  var reversedArray = [];
  
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  
  return reversedArray;
}


var originalArray = [1, 2, 3];
var reversed = reverseArray(originalArray);
console.log(reversed); 

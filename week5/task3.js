function applyFunction(array, func) {
    return array.map(func);
  }
  
  var numbers = [1, 2, 3];
  var multipliedNumbers = applyFunction(numbers, function(x) {
    return x * 2;
  });
  console.log(multipliedNumbers); 
  
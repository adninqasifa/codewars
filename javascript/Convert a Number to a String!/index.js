function numberToString(num) {
  // Return a string of the number here!
  let result = num.toString()
  return result
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(numberToString(67), '67');
Test(numberToString(123), '123');
Test(numberToString(999), '999');

// DONE

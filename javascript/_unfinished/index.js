function multiply(a, b){
  let result = a * b
  return result
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(multiply(1,1), 1);
Test(multiply(2,1), 2);
Test(multiply(2,2), 4);
Test(multiply(3,5), 15);

// DONE

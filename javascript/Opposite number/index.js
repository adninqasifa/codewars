function opposite(number){
  return -number
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(opposite(1), -1);
Test(opposite(14), -14);
Test(opposite(-34), 34);

// DONE

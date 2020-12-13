var stringToNumber = function(str){
  // put your code here
  let result = str*1
  return result;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(stringToNumber("1234"), 1234)
Test(stringToNumber("605"), 605)
Test(stringToNumber("1405"), 1405)
Test(stringToNumber("-7"), -7)

// DONE

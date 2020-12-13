function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(createArray(1),[1]);
Test(createArray(2),[1,2]);
Test(createArray(3),[1,2,3]);
Test(createArray(4),[1,2,3,4]);
Test(createArray(5),[1,2,3,4,5]);

// DONE

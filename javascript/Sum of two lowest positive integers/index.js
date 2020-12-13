function sumTwoSmallestNumbers(numbers) {
  //Code here
  let longestArr = [];
  for(var i = 0; i < numbers.length; i++) {
    if(numbers[i] < longestArr[0] || longestArr[0] == null) {
      if(longestArr[0] < longestArr[1] || longestArr[1] == null) {
        longestArr[1] = longestArr[0];
      }
      longestArr[0] = numbers[i];
    } else if(numbers[i] < longestArr[1] || longestArr[1] == null) {
      longestArr[1] = numbers[i];
    }
  }
  return longestArr[0] + longestArr[1];
}


// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result))
}

// Test assertions
Test(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
Test(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
Test(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
Test(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
Test(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");

// DONE

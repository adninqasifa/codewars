function isDivideBy(number, a, b) {
  // good luck
  if (number % a == 0 && number % b == 0) {
    return true
  } else {
    return false
  }
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(isDivideBy(-12, 2, -6), true);
Test(isDivideBy(-12, 2, -5), false);
Test(isDivideBy(45, 1, 6), false);
Test(isDivideBy(45, 5, 15), true);
Test(isDivideBy(4, 1, 4), true);
Test(isDivideBy(15, -5, 3), true);

// DONE

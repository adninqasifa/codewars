function centuryFromYear(year) {
  return Math.floor((year-1)/100) + 1;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(centuryFromYear(1705), 18); // true
Test(centuryFromYear(1900), 19); // true
Test(centuryFromYear(1601), 17); // true
Test(centuryFromYear(2000), 20); // true
Test(centuryFromYear(2021), 20); // false

// DONE

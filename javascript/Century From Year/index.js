function centuryFromYear(year) {

}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(centuryFromYear(1705), 18);
Test(centuryFromYear(1900), 19);
Test(centuryFromYear(1601), 17);
Test(centuryFromYear(2000), 20);

function lifePathNumber(dateOfBirth) {
  const [year, month, date] = dateOfBirth.split("-")
  return [year, month, date]
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(lifePathNumber("1879-03-14"), 6);
Test(lifePathNumber("1988-07-13"), 1);

function past(h,m,s) {
  //#Happy Coding! ^_^
  let result = h*3600000 + m*60000 + s*1000
  return result;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(past(0,1,1), 61000);
Test(past(1,1,1), 3661000);
Test(past(0,0,0), 0);
Test(past(1,0,1), 3601000);
Test(past(1,0,0), 3600000);

// DONE

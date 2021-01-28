function repeatStr(n, s){
  let str = ""
  for(let i=0; i<n; i++) {
    str += s
  }
  return str
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(repeatStr(3, "*"), "***");
Test(repeatStr(5, "#"), "#####");
Test(repeatStr(2, "ha "), "ha ha ");
Test(repeatStr(6, "I"), "IIIIII");
Test(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello");

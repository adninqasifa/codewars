const Calculator = function() {
  this.evaluate = string => {
    let result = eval(string)
    return result
  }
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

const calculate = new Calculator()

Test(calculate.evaluate('127'), 127)
Test(calculate.evaluate('2 + 3'), 5);
Test(calculate.evaluate('2 - 3 - 4'), -5);
Test(calculate.evaluate('10 *  5 / 2'), 25);

console.log("Bonus Test")
Test(calculate.evaluate('10 + 6 / 2'), 13);

// DONE

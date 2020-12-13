const Calculator = function() {
  // do code here
  this.evaluate = string => {
    let n = string.split(' ')
    let result = 0;
    let counter = 0;
    for(let i = counter ; i < n.length; i++) {
      if(result == 0) {
        result = Number(n[i])
      } else {
        if(n[i]=='+') result = result + Number(n[i+1])
        else if(n[i]=='-') result = result - Number(n[i+1])
        else if(n[i]=='/') result = result / Number(n[i+1])
        else if (n[i]=='*') result = result * Number(n[i+1])
        counter++
      }
    }
    return result
  }
};

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

function reverseWords(str) {
  // Go for it
  let result = str.split("").reverse().join("").split(" ").reverse().join(" ")
  return result;
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
Test(reverseWords('apple'), 'elppa');
Test(reverseWords('a b c d'), 'a b c d');
Test(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

// DONE

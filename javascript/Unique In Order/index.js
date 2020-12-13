var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let result = []
  let last

  for (let i=0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  return result
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result))
}

// Test assertions
Test(uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
Test(uniqueInOrder('ABBCcAD'), ['A', 'B', 'C', 'c', 'A', 'D'])
Test(uniqueInOrder([1,2,2,3,3]), [1,2,3])

// console.log(uniqueInOrder('ABBCcAD'));
// console.log(uniqueInOrder('AAAABBBCCDAABBB'));
// console.log(uniqueInOrder([1,2,2,3,3]));

// DONE

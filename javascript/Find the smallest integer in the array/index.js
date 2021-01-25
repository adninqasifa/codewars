class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a-b)[0]
  }
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(findSmallestInt([34, 15, 88, 2]), 2);
Test(findSmallestInt([34, -345, -1, 100]), -345);

// DONE

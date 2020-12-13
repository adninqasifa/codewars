function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  return "Hello, " + name + "!";
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(greet("Jim"), "Hello, Jim!");
Test(greet("Jane"), "Hello, Jane!");
Test(greet("Simon"), "Hello, Simon!");
Test(greet("Johnny"), "Hello, my love!");

// DONE

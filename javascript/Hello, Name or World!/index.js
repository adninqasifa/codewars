function hello(name) {
  if(!name) {
    return "Hello, World!"
  }
  return (
    "Hello, " + name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + "!"
  )
}

// Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

// Test assertions
Test(hello('johN'), 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
Test(hello('alice'), 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
Test(hello(), 'Hello, World!', "returns 'Hello, World!' when name is not given")
Test(hello(''), 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )

// DONE

//console.log(hello(""));

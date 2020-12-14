def greet(name):
  if name == "Johnny":
      return "Hello, my love!"
  else:
      return "Hello, {name}!".format(name=name)

# Test Function do not edit
def Test(fun, result):
    print(fun == result)

# # Test assertions
Test(greet("James"), "Hello, Simon!");
Test(greet("Jane"), "Hello, Jane!");
Test(greet("Jim"), "Hello, Jim!");
Test(greet("Johnny"), "Hello, my love!");

#print(greet("Jim"))

def number_to_string(num):
    # Return a string of the number here!
    result = str(num)
    return result

# Test Function do not edit
function Test(fun, result) {
  console.log(JSON.stringify(fun) === JSON.stringify(result));
}

# Test assertions
Test(number_to_string(67), '67');
Test(number_to_string(123), '123');
Test(number_to_string(999), '999');

# NOT DONE
# test.expect(number_to_string(67) == '67');

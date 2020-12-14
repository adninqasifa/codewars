def string_to_number(s):
    # ... your code here
    result = int(s)
    return result

# Test Function do not edit
def Test(fun, result):
    print(fun == result)

# Test assertions
Test(string_to_number("1234"), 1234)
Test(string_to_number("605"), 605)
Test(string_to_number("1405"), 1405)
Test(string_to_number("1234"), 1234)

# DONE

Arithmetic module
=================
Arithemetic lib module has two methods
1) Add(): Takes two arguments that are validated to be numbers and return sum of two integers
2) Sub(): Takes two arguments that are validated to be numbers and return the result by subtrating second number from first number

Arithemetic test module
=======================
Arithemetic test module has four unit test cases
1) Add(): 
    a) Test whether one of two arguments are not number type and check for expected result 'null'
    b)  Test whether both of two arguments are number type and if yes, expect the return result to be sum of two numbers
2) Sub(): 
    a) Test whether one of two arguments are not number type and check for expected result 'null'
    b)  Test whether both of two arguments are number type and if yes, expect the return result to be (number1 - number2)

Greet module
=================
Greet lib module has just one method that handles two cases
1) Takes 'name' as input argument and check for string type, if yes return 'Hello {name}' and 'null' otherwise.

Greet test module
=================
Greet test module has two unit test cases
1) Check whether input value is not a string type and expect the results to be null
2) Check whether input value is a string and expect the return result to be 'Hello {name}'
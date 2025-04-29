1. 3
   This is printed because the for loop runs 3 times. After i=2 becomes i=3 because of i++, executions stops because i < 3 (length of the array) is false. So, i=3 is the value of i that remains.
2. 150
   This is printed because the for loop runs until it is done executing the steps on the last element of the array which in our case is 300 and it applies a 50% discount on it which make it 150.
3. 150 
The for loop runs for every element in the array and applies a 50% discount on 300 which makes it 150 and that is the last assignment for finalPrice which is why that is the most recent value for it and it gets printed.
4. [50, 100, 150]
   This is because the for loop is going over every element in the array and applying a 50% discount on the value and adding the updated values (after discount) to the new array. So, the updated list looks like that.

5. ReferenceError: i is not defined
    at discountPrices (<anonymous>:21:15)
    at <anonymous>:25:1
    at mn (<anonymous>:16:5455)
stack
:
"ReferenceError: i is not defined\n at discountPrices (<anonymous>:21:15)\n at <anonymous>:25:1\n at mn (<anonymous>:16:5455)\n at Object.playcodeUpdateWindow (<anonymous>:25:438)\n at <anonymous>:25:1688\n at <anonymous>:12:3313\n at Array.forEach (<anonymous>)\n at e._handleSignal (<anonymous>:12:3286)\n at e.dispatch (<anonymous>:12:1650)\n at t (<anonymous>:15:1493)"
message
:
"i is not defined"
[[Prototype]]
:
"ReferenceError\n"


(Outputs an error message, does not print anything) 
It outputs an error message because i is initialized as a block-scoped variable and line 12 tries to access it outside the code block and its value does not exist there which is why it throws an error. 

6. ReferenceError: discountedPrice is not defined
    at discountPrices (<anonymous>:21:15)
    at <anonymous>:25:1
    at mn (<anonymous>:16:5455)

(Outputs an error message, does not print anything) 
It outputs an error message because discountedPrice is initialized as a block-scoped variable and line 13 tries to access it outside the code block and its value does not exist there which is why it throws an error. 

7. 150
   The for loop goes over every value in the array and applies a 50% discount on the last element (300) and that is how we get 150. It did not throw an error here like in the last 2 cases because it is still within the code block as the one in which it was initialized so it is not out of scope.


8. [50, 100, 150]
The for loop goes over every value in the array and adds the updated values (after the discount) to the discounted array. It is still within the code block as the one in which it was initialized so it is not out of scope and does not throw an error. That is why it prints a value. 


9. ReferenceError: i is not defined
    at discountPrices (<anonymous>:20:15)
    at <anonymous>:24:13
    at mn (<anonymous>:16:5455)

   We get an error saying i is not defined because i is initialized as a block-scoped variable and is in the for loop. We try to access i outside the block where it does not exist outside the for loop and that is why it says that i is not defined because it is not in the scope.



10. 3
    Since on line 4 we assign length to be the number of elements in the prices array, it sees that there are 3 elements in the array and just prints that. It does not run into any scoping errors because it is still in the block-scope where it was initialized. It was declared at the top of the function. 

11. [50, 100, 150]
    This is because the discounted array is updated every time when we add the updated value (price after discount of 50%) to the array. It is still in the block-scope as it was declared/initialised in so it does not have any scoping problems either. It was declared at the top of the function.


12. A) student.name
    B) student['Grad Year']
    C) student.greeting()
    D) student['Favorite Teacher'].name
    E) student.courseLoad[0]

13. A) '32'   (concatenates 3 and 2 as a string) 
    B) 1      (concatenation as a string does not work for subtraction so it forces numeric conversion of 3 and does 3 - 2 = 1)
    C) 3      (the value of null is 0 so it does 3 + 0 = 3)
    D) '3null' ('3' is a string here and it treats null as a string too and just concetenates them together)
    E) 4        (The value of true is 1 so it does 1 + 3 = 4)
    F) O        (The values of both false and null are 0 so it does 0 + 0 = 0)
    G) '3undefined' ('3' is a string here and it concatenates it with undefined which is treats as a string)
    H) NaN      (The value of undefined does not exist so it is not able to subtracted from 3 it just converts it to NaN. Undefined just becomes NaN.)
    
    
    
14. A) true    (converts '2' to a number and then compares 2 > 1 which evaluates to true)
    B) false   (since both of them are strings, it does a lexicographical comparsion based on the unicodes and since 2's ASCII value is 50 and 1's (from 12) ASCII value is 49, it compares 50 and 49 and sinc 50 is bigger, it thinks that '2' is bigger)
    C) true    (since one of them is a string, it gets converted to a number type and then the comparsion of 2 == 2 takes place which is true)
    D) false   (type conversion does not take place here even though one of them is a string and other is a number type because we are using the '===' operator which does comparisons without changing the type. 
    E) false   (this evaluates to false because we know from the reading documentation that the value of true is 1, not 2)
    F) true    (since Boolean(2) also evaluates to true, it basically becomes a check for true === true which is true)


15. Strict equality operator (===) checks the equality without type conversion whereas == does type conversion and then checks for equality.
    
16. Answered in part2-question16.js
    
17. [2, 4, 6]
    We get this as the result because the doSomething function is passed as callback in the modifyArray function where we are multiplying every element of the original array by 2 (by looping through all the elements of the array) before adding the updated elements to the new array. This new updated array is then returned. 

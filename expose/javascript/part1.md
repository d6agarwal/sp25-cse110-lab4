1. values added: 20
   
2. final result: 20
   
3. We should not use var because as shown through this example, it did not limit its use to just the if condition which would have been ideal. Even after the if condition ended, the else condition did not run but was still able to access the value which was not intended. This is because var is function-scoped and not block-scoped like let. That is why let and const are a lot better.
   
4. values added: 20
   
5. (Outputs an error message, does not print anything)
   ReferenceError: result is not defined
    at sumValues (<anonymous>:14:33)
    at <anonymous>:17:1
    at mn (<anonymous>:16:5455)
stack
:
"ReferenceError: result is not defined\n at sumValues (<anonymous>:14:33)\n at <anonymous>:17:1\n at mn (<anonymous>:16:5455)\n at Object.playcodeUpdateWindow (<anonymous>:25:438)\n at <anonymous>:25:1688\n at <anonymous>:12:3313\n at Array.forEach (<anonymous>)\n at e._handleSignal (<anonymous>:12:3286)\n at e.dispatch (<anonymous>:12:1650)\n at t (<anonymous>:15:1493)"
message
:
"result is not defined"
[[Prototype]]
:
"ReferenceError\n"


It throws an error because the behavior is not defined for the else condition where it uses the result variable but that variable was decalred inside a different block of code and its scope was restricted to that block only, not the entire function. That is why in the else condition, the result variable did not exist anymore and it threw an error. 


6. (Outputs an error message, does not print anything)
   Cannot assign to "result" because it is a constant

   Since we used const for result, it prevents reassignment of its value to 0 and when we try to update it to the sum in the next line, it does not let us do that because we cannot change the value of a constant. Since we cannot do this, it does not execute the rest of the code and throws an error and nothing is printed. 
   
7. (Outputs an error message, does not print anything)
   Cannot assign to "result" because it is a constant
   

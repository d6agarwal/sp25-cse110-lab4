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

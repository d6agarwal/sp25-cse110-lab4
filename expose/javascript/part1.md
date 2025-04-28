1. Line 9 will print 20 as it is summing up 10 and 10
2. Line 13 will also print 20
3. We should not use var because as shown through this example, it did not limit its use to just the if condition which would have been ideal. Even after the if condition ended, the else condition did not run but was still able to access the value which was not intended. This is because var is function-scoped and not block-scoped like let. That is why let and const are a lot better. 

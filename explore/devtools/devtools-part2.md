1. Bug: The problem was that it was using inputs of 1 and 2 (or any other values for num1 and num2) as string and concatenating the strings together. It was not treating them as numbers as it should have in order to do an arithematic addition.
     
2. Fix: I type-casted (changed data type) from string to Number so that "1" and "2" for example could be interpreted as 1 and 2 respectively and then it will be able to do 1 + 2 = 3 instead of string concatenation.

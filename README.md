# Javascript Type Coercion Bug
This example demonstrates a common Javascript bug caused by type coercion.  The `foo` function intends to add two numbers, but due to Javascript's loose typing, when a string is passed it concatenates instead of performing numerical addition.  The solution shows how to explicitly check and convert types for more reliable results. 

## Bug
The `bug.js` file shows the unexpected behavior.  Note the output when using mixed numeric and string inputs.

## Solution
The `bugSolution.js` file provides a corrected implementation. It performs type checking and converts inputs to numbers before addition, preventing unexpected string concatenation.
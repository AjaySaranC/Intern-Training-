# Milestone 3 : Operators.
## Unary Operator:
- Unary operator works only on a single operand.
- `Unary Plus (+)` :It converts a operand into a number.
    - Ex:
        ```javascript
            let a= "23";
            let x= +a;  // syntax: +operand
        ```
-  `Unary Minus (-)` :It converts a operand into a negative number.
       - Ex:
        ```javascript
            let a= "23";
            let x= -a;  // syntax: -operand
        ```
-  `Unary Incremenat (++)` :It adds 1 to its operand value.
       - Ex:
        ```javascript
            let a= 23;
            let x= a++; // a is assigned and then incremented
            let y= ++a;  // a is incremented and assigned.
        ```
        - same for `Unary Decrement(-)` but subtracts 1.
- `Logical NOT (!)`:Inverts the boolean value.
        - Ex:
        ```javascript
            let a= false;
            let x= !a; // true
        ```
- `Bitwise NOT (~)`:Inverts all the bits of its operand.
        - Ex:
        ```javascript
            let a= 10;
            let x= ~a; // -11 (Inversion of 10 in 8 bits -> Two's Compliment for signed numbers.)
        ```
## Bitwise Operator:
- JS use 32 bits Bitwise Operands.
- Bitwise AND:  It returns 1 if both bits are 1.
- Bitwise OR: Returns 1 if one of the bits is 1.
- Bitwise XOR: Returns 1 if the bits are different.
- Bitwise NOT: Inverts the bits
- Bitwise Left Shift(<<): Zero fill shift from right and left bit falls.
- Sign Preserving Bitwise Right Shift(>>): This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off.
- Bitwise Right Shift(<<): Zero fill. Same as Left shift but from left.
```html
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p>
    <p id="demo1"></p>
    <p id="demo2"></p>
    <p id="demo3"></p>
    <p id="demo4"></p> 

    <script>
    document.getElementById("demo").innerHTML = 5 & 6;
    document.getElementById("demo1").innerHTML = 3 | 1;
    document.getElementById("demo2").innerHTML =  ~ 1;
    document.getElementById("demo3").innerHTML = 7 << 1;
    document.getElementById("demo4").innerHTML = 8 >> 2;
    </script>

    </body>
    </html> 

```

## Boolean operator:
- Boolean operator used to perform logical operations and return a boolean result.Used in conditional Statements.
### Logical AND:
- Reprsented as `&&`.It returns true if two exp or values are true. otherwise false.
### Logical OR:
- Reprsented as `||`.It returns true if any one of the two exp or values are true. otherwise false.
### Logical NOT:
- Reprsented as `!`.It returns true if two exp or values are true. otherwise false.
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
let x = 8;
let y = 5;

document.getElementById("demo").innerHTML = 
(x < 10 && y > 1) + "<br>" + 
(x > 2 || y < 4);
</script>

</body>
</html>

```


## Arithmetic Operator:
- Uses addition, subtraction, multiplication, division, modulo, exponentiation , increment , decrement.

| Operator | Functions                       |
|----------|---------------------------------|
| +        | Addition                        |
| -        | Subtraction                     |
| *        | Multiplication                  |
| **       | Exponentiation                  |
| /        | Division                        |
| %        | Modulus                         |
| ++       | Increment                       |
| --       | Decrement                       |
 
 ```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
let x = 8;
let y = 5;
let z = x + y;
let a = x - y;
let b = x * y;
let c = x / y;
let d = x ** y;
let e = x % y;

document.getElementById("demo").innerHTML = 
z + "<br>" +a + "<br>" +b + "<br>" +c + "<br>" +d + "<br>" +e;
</script>

</body>
</html>

 ```

 ## Relational Operator:
- Relational Operator in JS uuse to compare two values and returns a boolean result.

### Comparison Operator:

| Operator | Functions                           |
|----------|-------------------------------------|
| ==       | equal to                            |
| ===      | equal value and equal type          |
| !=       | not equal                           |
| !==      | not equal value or not equal type   |
| >        | greater than                        |
| <        | less than                           |
| >=       | greater than or equal to            |
| <=       | less than or equal to               |
| ?        | ternary operator                    |

```javascript
function sample(){ return 5>8 ? 'yes':'no';}
```

## Assignment Operator:
- Assigns value to a variable in javascript,`=` is used to assign value.

| Operator  | Functions                       |
|-----------|---------------------------------|
| +=        | Addition and assigns            |
| -=        | Subtraction ans assigns         |
| *=        | Multiplication and assigns      |
| **=       | Exponentiation and assigns      |
| /=        | Division and assigns            |
| %=        | Modulus and assigns             |

- Same applies for bitwise and logical assign.

```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
let a = "Hello";
a += " World";
document.getElementById("demo").innerHTML = a;
</script>

</body>
</html>



```

## Comma Operator:
- The comma operator evaluates each of its operands from left to right and returns the value of last operand.
Ex: 
    ```javascript
    x = (2, 3); // this will assign 3 to variable x.
    ```
- the comma operator is different from the comma that we use in places like array initializers, separators function declarations etc.



# Milestone 5:
## Functions:

- A function is a block of code designed to perform a particular task. The Function will be executed when something invokes or calls it.
- The javascript function are defined with `function` keyword followed by function name and `()`,the parameters if any is defined inside the parantheses.
- Syntax:
    ```javascript
        function name(parameter1, parameter2) {
        // function block
        }
    ```
- Invocation: occurs when,
    - an event occur.
    - invoked from js code.
    - automatic invocation

- Function Return:
    - `return` keyword is used to return a value.
    - return value is returned back to the caller.
    

- With function we can reuse the code by passing different arguments to produce different results.
- `()` operator is used to invoke or calls the function.
```html
<!DOCTYPE html>
<html>
<body>


<p id="demo"></p>

<script>
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a + b;
}
</script>

</body>
</html>

```
- The function can also be used as in variable  places directly.
- The variables declared inside function will be `LOCAL` to that function.

## Function Overloading:
- Function overloading in JavaScript refers to the concept of creating multiple functions with the same name but different parameter lists.
- Java Script doesnt allow function overloading like Java, C#.
-  JavaScript functions can handle multiple types and numbers of arguments using a variety of techniques.
#### Using `arguments` object:
- `arguments` object is an array-like object accessible inside functions that contains the arguments passed to the function.
```javascript
function example() {
    if (arguments.length === 0) {
        console.log("No arguments");
    } else if (arguments.length === 1) {
        console.log("One argument: " + arguments[0]);
    } else if (arguments.length === 2) {
        console.log("Two arguments: " + arguments[0] + ", " + arguments[1]);
    }
}

example();        
example("Hello");      
example("Hello", 42);
```

#### Checking Argument Types:

```javascript
function example(arg1, arg2) {
    if (typeof arg1 === "string" && typeof arg2 === "undefined") {
        console.log("One string argument: " + arg1);
    } else if (typeof arg1 === "number" && typeof arg2 === "number") {
        console.log("Two number arguments: " + arg1 + " and " + arg2);
    } else {
        console.log("Different set of arguments");
    }
}

example("Hello");      
example(10, 20);      
example(10, "Test"); 
```
#### rest parameter:
- Th js allows the use of default parameters and rest parameters to handle variable numbers of arguments more gracefully.
```javascript
function example(a, b = 0, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}

example(1);           // a: 1, b: 0, rest: []
example(1, 2);        // a: 1, b: 2, rest: []
example(1, 2, 3, 4);  // a: 1, b: 2, rest: [3, 4]

```

## Arguments and Parameter:
### Parameter:
- Parameters are the named variables listed in the function definition. 
- They act as placeholders for the values (arguments) that will be passed to the function when it is called.
- Syntax:
```javascript
function name(parameter){
    console.log(parameter);
}
```
### Arguments:
- Arguments are the actual values that are passed to the function when it is called. 
- These values are assigned to the corresponding parameters.
```javascript
function name(parameter){
    console.log(parameter);
}

name("hello");

```

```html
<!DOCTYPE html>
<html>
<body>
 <label>Enter 1st value</label>
 <input type="text" id="val1" name="val1"><br/><br/>
 <label>Enter 2nd value</label>
 <input type="text" id="val2" name="val2"><br/><br/>
 <input type="submit" id="submit" name="submit" onclick="func()">
<p id="demo"></p>

<script>

function myFunction(p1, p2)  // parameters p1 and p2.
{
  return p1 * p2;
}

function func(){
	let x=document.getElementById("val1").value;
    let y=document.getElementById("val2").value;
   let result = myFunction(x, y); //arguments passed to invoke the function.
   document.getElementById("demo").innerHTML = result;
}


</script>

</body>
</html>

```

## JavaScript Linting:
- In time, lint-like tools added many other types of checks and verifications. The JavaScript Linting software provides developers with tools to help them write highly scalable code.
- Linting in JavaScript refers to the process of identifying potential errors in code by using a program.
- Linter is a name derived from a C source code analysis tool known as "lint".
- General workflow with included linting mechanism to work on a project.
    - Write code
    - Compile it
    - Use linting software to analyse
    - Review bugs
    - Fix bugs
    - link the modules when code is clean
    - Then imply best linter to analyse it again.
    - Review the code manually.
- Features of linting:
    - Errors are less likely to occur in production.
    - Better readability, maintainability, and consistency of code.
    - Code quality can be measured objectively. 
    - Developers are becoming more aware of code quality. 
    - Improved security and reliability of code.
- JS Linting Tools:
### `JSLint` :
- In 2002, Douglas Crockford created it to emphasize what he considers to be the best features of JavaScript linters.JSLint is the oldest.Most strict and opinionated.
- Usage: Website: You can use JSLint directly on its website by pasting your code.Command Line: JSLint can also be used via command-line tools, although it is less common than ESLint.

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>JSLint Example</title>
</head>
<body>
    <script src="https://www.jslint.com/jslint.js"></script>
    <script>
        const myCode = "var x = 1;";
        JSLINT(myCode);
        console.log(JSLINT.errors);
    </script>
</body>
</html>
```

### `JSHint` :
- It has integrated and changed more rapidly than JSLint.There were some rules removed and new ones added that would better suit how JavaScript developers code today.  Less strict, more configurable than JSLint.
- Usage: Can be downloaded in system project file.

```javascript
{
  "esversion": 6,
  "asi": true,
  "globals": {
    "jQuery": true
  }
}

```

### `ESLint` : 
- Developing JavaScript linting rules of their own was the primary reason ESLint was created. ESLint is conceived to have `pluggable` rules.Most flexible and configurable.
- usage: can be installed in project directly and used.: Install ESLint via npm.

```javascript
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
  }
}

```


## Currying functions in Java Script:
- It is a technique in functional programming that transforms the function with multiple argument into multiple function which accepts single argument in a sequence.
- syntax:
```javascript
function fname(param1){
    return function(param2){
        return function(param-n){
            return //some operated results.
        }
    }
}
fname(arg1)(arg2)(arg3);
```

- Why currying function?
    - It makes the code more readable
    - It helps us to avoid passing the same variable multiple times
    - It is very useful in building modular and reusable code
    - It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
    - It helps us to create a higher-order function
- Curryin example program:
```html
<!DOCTYPE html>
<html>
<body>
 <label>Enter 1st value</label>
 <input type="text" id="val1" name="val1"><br/><br/>
 <label>Enter 2nd value</label>
 <input type="text" id="val2" name="val2"><br/><br/>
 <label>Enter 3rd value</label>
 <input type="text" id="val3" name="val3"><br/><br/>
 <input type="submit" id="submit" name="submit" onclick="func()">
<p id="demo"></p>

<script>

function myFunction(p1)  // parameters p1 and p2.
{
  return function(p2){
    return function(p3){
       return p1 + p2 + p3;
    }
  }
 
}

function func(){
	let x=Number(document.getElementById("val1").value);
  let y=Number(document.getElementById("val2").value);
  let z=Number(document.getElementById("val3").value);
  let result = myFunction(x)(y)(z); //arguments passed to invoke the function.
  document.getElementById("demo").innerHTML = result;
}


</script>

</body>
</html>

```


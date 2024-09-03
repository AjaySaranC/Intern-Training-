# Milestone 2 Java Script:

## 1.Case-sensitivity:
- JavaScript is a case-senstive language.
- The variable, keywords , function names and other identifiers should follow a strict case sensitivity.
- `variable` and `VARIABLE` will be considered as two separate variables.

## 2.Identifiers:
- An Identifier is used to name variables and functions.
- An identifier can contain Unicode letters, $(dollar symbol), _ (underscore) and digits (0-9). But should not start with a digit.
- Identifier should not be a keyword.
- Valid:
```javascript
const x = 'hello';
const _x = 'hello';
```
- Invalid:
```javascript
const 1x = 'hello';
```
## 3.Comments:
Java Script Comments are used to explain particular functionality or code for the developers.JS Comments are ignored during the execution.
- #### Single Line Comments:
    - Single line comments are starts with `//` . The text after `//` till end of the line are considered as comments.
    ```javascript
    //This is the sample comment
    document.getElementById("id1").innerHTML = "Hello";
    ```

 - #### Multi Line Comments:
    - Multi line comments are starts with `/*` and ends with `*/` .
    ```javascript
    /*This is the 
    sample 
    Multi line comment */
    document.getElementById("id1").innerHTML = "Hello";
    
    ```
## 4. Strict Mode:
 - `"use strict" ` defines the js code should be executed in strict mode.
 - It was new in ECMAScript version 5.
 - With strict mode
    - Undeclared variables show error.
    - Using Object without declarind it is not allowed.
    - Deleting a variable are not allowed.
    - Deleting a function is not allowed.Duplicating a parameter name is not allowed.
    - Octal numeric literals are not allowed.
    - The words `eval` `arguments` cannot be used as a variable.
    - The keywords for future versions of JS cant be used as variable name. `public` `private` `static` `interface` `implements`.
    ```javascript
        "use strict";
        x = 3.14;
        let eval = 3.14;
        let x = 010;
        function x(p1, p1) {};
        function x(p1, p2) {};
        delete x; 
        let x = 3.14;
        delete x; 
        let public = 1500; 
    ```
## 5. Statements:
- JS statements has :Values, Operators, Expressions, Keywords, and Comments.
    ```javascript
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    ```
    - semicolons: are used to separate js statements.
    - whitespaces: are ignores by js used for clean code structure.
    - Line breaks: if statements is long, best is to break after an operator.
    - keywords : js statement often starts with keywords.`if` `const` `var`.

## 5. keywords and reserved words:
In js we cant use reserved words as variables, fucntion names and parameter and argument.
- Reserved words example: `function` `arguments` `return` `try` `true` `if` `for`.
- Removed reserved words from ECMAScript 6 : `final` `goto` `char` `int`.
- Object keywords: `Array` `Date` `Math`
- Java Reserved words: Java programming objects and properties are also considered as reserved words in js. `java` `getClass`.
- HTML Event handlers are also reserved words `onclick` `onsubmit`.

## 6.Variables:
Variable are container to store data.
JS variables aree declared in 4 ways.
- Automatically without using any keyword
- `var` : used for older browser.
- `let` : use if variables value need to be changed(Reassign).But cant be redeclared
- `const`: variables value and type cant be changed.

```javascript
    x = 5;
    const x = 5;
    var x = 5;
    let x = 5;
    let x="ajay"; //not possible
```

## 7. typeof Operator:
Java Script has 7 primitive data types:
- string, number , boolean , bigint ,symbol, null , undefined.
The typeof operator returns the type of a variable or an expression.
```html
    <!DOCTYPE html>
    <html>
    <body>
    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = 
    typeof "John" + "<br><br>" + //string
    typeof {name:'John'} + //function
    typeof null + "<br><br>" + //object
    typeof 33 + "<br><br>" +  //number
    typeof car +        //undefined
    typeof true + "<br><br>"  //boolean

    </script>

    </body>
    </html>
```
- Constructor Property: returns the constructor function for js variables.

```javascript
    new Date().constructor //returns date function.
    [1,2,3,4].constructor // returns array.
    {name:'John',age:34}.constructor //returns object.
    
```

## 8. undefined:
`undefined` means variable with no value.Has not been assigned.
```javascript
    let x;
    document.getElementById("demo").innerHTML = typeof x; //returns undefined.
```
- undefined() is an ECMAScript1 (ES1) feature.

## 9.null:
The null value represents the intentional absence of any object value.
-Explicitly assigned.
```javascript
let x=null;
    document.getElementById("demo").innerHTML = typeof x; //returns null.
```

## Difference between null and undefined
- undefined and null are equal in value but different in type.
- undefined is type `undefined`.
- null is type `object`.
- null is declared explicitly.

## 10.boolean:
- `Boolean()` function is use to find out if an expression (or a variable) is true or false.
`document.getElementById("demo").innerHTML = Boolean(100 > 19);`
- anything without a value or with null and undefined returns false.

## 11.Number:
- JS has only one type of number.NUmbers can be written with or without decimals.
- JS store value in 0-51 bit ,expponent in next 52-62 bit and sign in 63 rd bit.
- `Integer Precision` :Integers are accurate upto 15 digits.if it exceeds they are rounded up.
- `Floating Precision` Floating point operations not 100% accurate.Ex: `0.2+0.1` is `0.30000000000000004`
#### NaN:
It stands for Not a Number, a reserved word indicating a number is not a legal number.
```javascript
document.getElementById("demo").innerHTML = 100 / "Apple"; // returns NaN.
```

## 12.String:
- A string in js is 0 or more characters within quotes.
Ex: `let text="Hello" ;`
- Can use single or double quotes.
#### Template string :
-  uses "" (double quotes) and '' (single quotes) inside it. strings between ` `.

### 12.1:Escape Characters:
To use "" and '' within string ,it is used with backslash escape characters as \' or \" and \\ (backslash).
-Other escape :`\b`(backspace)  `\n`(newline) `\r`(carriage return) `\t`(Horizontal Tab).

String using Object: `let x = new String("ajay");`

### String Methods:
- 1.length: returns the length of the string
- 2.Extracting String Character
  - at(position)
  - CharAt()
  - charCodeAt()
  - [] property access.It makes string looks like array but it isnt.
- 3.Extracting String parts:
  - slice(start,end):  extracts a part of a string
  - substring(start, end) : extracts a part of a string difference is that start and end values less than 0 are treated as 0
  - substr(start, length) : parameter specifies the length of the extracted part.
- 4.UpperCase and LowerCase:
  - toUpperCase()
  - toLowerCase()

- 5.Concatenation:
  - concat() method can be used instead of the plus operator.
- 6.The trim() method removes whitespace from both sides of a string
  - The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
  - The trimStart() method works like trim(), but removes whitespace only from the start of a string.
- 7.Padding adds string start and end of a string. `padStart()` `padEnd()`
- 8.The repeat() method returns a string with a number of copies of a string.
- 9.the replace() method replaces only the first match it is case sensitive.
- 10.The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
- 11.split(): A string can be converted to an array with the split() method

```html
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>
<p id="demo6"></p>
<p id="demo7"></p>
<p id="demo8"></p>
<p id="demo9"></p>
<p id="demo10"></p>
<p id="demo11"></p>
<p id="demo12"></p>
<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text2 = "abcdefghijklmnopqrstuvwxyz";
let text3 = "hello"
document.getElementById("demo").innerHTML = text.length;
document.getElementById("demo1").innerHTML = text.charCodeAt(0);
document.getElementById("demo2").innerHTML = text.charAt(0);
document.getElementById("demo3").innerHTML = text[2];
document.getElementById("demo4").innerHTML = text.slice(7, 13);
document.getElementById("demo5").innerHTML = text.substring(1,8);
document.getElementById("demo6").innerHTML = text.toLowerCase();
document.getElementById("demo7").innerHTML = text.toUpperCase();
document.getElementById("demo8").innerHTML = text.concat(" ", text2);
document.getElementById("demo9").innerHTML = text3.padStart(10,"0");
document.getElementById("demo10").innerHTML = text3.repeat(2);
document.getElementById("demo11").innerHTML = text3.replace("hello", "hi");
document.getElementById("demo12").innerHTML = text.toUpperCase();
</script>

</body>
</html>


```

## 13.Object:
- object can be defined using : object literal, new keyword, obj constructor , object functions.
```javascript
const sample = {};
sample.data1 = "ajay";
sample.data2 = "saran";

```

- Using contructor:
```javascript
<script>

function info(name, age) {
  this.name = name;
  this.age = age;
}

const me = new info("ajay", 21);

document.getElementById("demo").innerHTML =
"Iam " + me.name ; 
</script>
```
- Setting properties to object using prototype.
```javascript
    <script>

    function info(name, age) {
    this.name = name;
    this.age = age;
    }

    info.prototype.nationality='Indian';
    const me = new info("ajay", 21);

    document.getElementById("demo").innerHTML =
    "Iam " + me.nationality ; 
    </script>
```

### Methods

#### General methods:
- Object.assign(target, source):copy from source to target obj
```javascript
    <!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

  <script>

    const info = {
    	name : 'ajay',
    	age  : 21
    }
    
      const info1 = {
    	name : 'saran',
    	age  : 21
    }

    Object.assign(info, info1);

    document.getElementById("demo").innerHTML =
    "Iam " + info.name ; 
    </script>

</body>
</html>

```
-   Object.entries():Returns the key value pairs inside the objects.

        ```javascript
                <script>

                    const info = {
                        name : 'ajay',
                        age  : 21
                    }
                    
                    

                    document.getElementById("demo").innerHTML =
                    Object.entries(info) ; 
                    </script>

        ```
- Object.values() is similar as Object.entries().
- Creating a property inside object:
```javascript
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

  <script>

    const info = {
    	name : 'ajay',
    	age  : 21
    }
    
 
     Object.defineProperty(info, "lastname", {value:"saran"})

    document.getElementById("demo").innerHTML =
    info.lastname ; 
    </script>

</body>
</html>

```

- Deleting a property:
```javascript
 delete info.age
```

- getter:
```javascript
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

  <script>

    const info = {
    	name : 'ajay',
    	age  : 21,
        language : 'tamil',
        get lang() {
        return this.language;
      }
    }
    
 
     Object.defineProperty(info, "lastname", {value:"saran"})

    document.getElementById("demo").innerHTML =
    info.lang ; 
    </script>

</body>
</html>

```

- setter:
```javascript
    <!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

  <script>

    const info = {
    	name : 'ajay',
    	age  : 21,
        language : '',
        set lang(lang) {
        this.language = lang;
      }
    }
    
 
     Object.defineProperty(info, "lastname", {value:"saran"})
	info.lang="Tamil"
    document.getElementById("demo").innerHTML =
    info.language ; 
    </script>

</body>
</html>

```

- Using Function:
```javascript
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

  <script>

    const info = {
    	name : 'ajay',
    	age  : 21,
        lastname :'saran',
        fullname : function(){
        	return this.name + " "+ this.lastname
        }
    }
    
 
     Object.defineProperty(info, "lastname", {value:"saran"})
	info.lang="Tamil"
    document.getElementById("demo").innerHTML =
    info.fullname() ; 
    </script>

</body>
</html>

```

## 14.Array/JSON Objects
### Array declaration:

- using literals: `const fruit = ["apple", "orange"];`
    - alter:
    ```javascript
        const fruit = [];
        cars[0]= "apple";
        cars[1]= "orange";
    
     ```
- using keyword:
```javascript
    const fruit = new fruit("apple", "orange");
```

### Array methods:

1. Length:
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let size = fruits.length;
    ```
2. Converting to string:
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.toString();
    ```

3. at():
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fruit = fruits.at(2);
    ```
4. join(): joins all array elements into a string.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.join("-");
    ```
5. pop() method removes the last element from an array.
6. push() method adds a new element to an array at end.
7. shift() method removes the first array element and shifts all other elements to a lower index(left).
8. unshift() method adds a new element to an array at the beginning, and move older elements to right to have high index.
```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
    let fruit = fruits.shift();// Lemon
    fruits.push("Kiwi");
    fruits.pop(); //last element
```
9. Concatenation:
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const vegetables = ["onion", "Garlic"];
    const new1 = fruits.concat(vegetables)
    ```

    - Merging three:
        ```javascript
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        const vegetables = ["onion", "Garlic"];
        const new1 = fruits.concat(vegetables);
        const new2 = fruit.concat(vegetables, new1);


        ```
10. splice : to remove element from array without leaving holes.
    ```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1); //output: Orange,Apple ,Mango.
    ```
11. slice : slice out piece of array to a new array.
    ```javascript
    const citrus = fruits.slice(1); //output: Orange,Apple ,Mango
    ```

12. indexOf(): returns position. 
```javascript
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
```
13. lastIndexOf() :returns last occurence of the specified element.
```javascript
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
```
14. includes() :check if an element is present in an array. 

### Sort methods:
15.  The `sort()` method sorts an array alphabetically.The reverse() method reverses the elements in an array.
16. `toSorted()` and `toReversed()` method used to assign to new variable instead of changing the original variable.
EX:
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<p id="demo5"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;

fruits.sort();
document.getElementById("demo2").innerHTML = fruits;
fruits.reverse();
document.getElementById("demo3").innerHTML = fruits;

const fruits2 = fruits.toReversed();

const fruits3 = fruits.toSorted();
document.getElementById("demo4").innerHTML = fruits2;
document.getElementById("demo5").innerHTML = fruits3;



</script>

</body>
</html>


```
17. Numeric Sort: The js sort only works with alphabets.TO sort numbers, a function is used.
```javascript
const points = [22,500, 21, 65,25,90];
points.sort(function(a, b){return a - b});
```
- Compares a and b ,If negative value `a` is placed before.

### JSON Object in JS:
- JSON object literals are surrounded by `{}`
- It contains Key-Value Pairs.
- Key should be string and values should be string, numbers, object, array, boolean and null.
- Creating Json using literals:
    -  `obj = {"name":"ajay", "lname":"saran", "car":2};`
- Creating using passing JSON string.
    ```javascript
        obj = '{"name":"ajay", "lname":"saran", "car":2}';
        obj2 = JSON.parse(obj);
    ```
#### Accessing Object Values:
- dot notation:
    ```javascript
        obj = {"name":"ajay", "lname":"saran", "car":2};
        a = obj.name;
    ```
- [] notation:
    ```javascript
        obj = {"name":"ajay", "lname":"saran", "car":2};
        a = obj[name];
    ```

# Milestone 4: Statements:
A statement is an instruction that the browser interprets and executes.

## Conditional Statements:
- The conditional statements is use to execute different blocks of code base on the condition or decisions.
- Mostly these conditions are used when there is a different actions to be performed.
- In JS, the condtional statements are categorized as,
    - `if` statements
    - `else` statements
    - `else if` statements 

### if Statements:
- it specifies a code to be executed when a condition is met.
- syntax:
    ```javascript
        if (condition) {
        //  block of code
        }
    ```
### else Statement:
- The else statements is used after the if statements.It is executed when the if condition not met.
    ```javascript
        if (condition) {
        // If block
        }
        else{
            //else block
        }

    ```
### else if Statement:
- The else if statements specify new statement when the if statement failed.
```javascript
        if (condition) {
        // if block
        }
        else if(condition2){
            //else if block
        } ...
        else if(condition n){
            //else if block
        }
        else{
            //else block
        }
```
- Example program:
```html
        <!DOCTYPE html>
        <html>
        <body>

        <p id="demo"></p>

        <script>
        const time = new Date().getHours();
        let greeting;
        if (time < 10) {
        greeting = "Good morning";
        } 
        else if (time < 18) {
        greeting = "Good day";
        } 
        else if(time < 21) {
        greeting = "Good evening";
        }
        else{
        greeting = "Good night";
        }
        document.getElementById("demo").innerHTML = greeting;
        </script>

        </body>
        </html>
```

## Looping Statements:
- Loops are used to run over a block of code till a particular condition.
- Java Script uses following code:
    - `for`
    - `for in`
    - `for of`
    - `while`
    - `do while`
### for loop:
- The for loop has three optional expressions.
- syntax:
```javascript
    for (expression 1; expression 2; expression 3) {
    // code block to be executed
    }
```
- expression 1: executed one time at beginning, expression 2 is condition and expression 3 is executed everytime.

```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const fruits = ["apple", "mango", "orange", "lemon"];
let len = fruits.length;
let text = "";
for(i=0;i<len;i++){
	text+=fruits[i]+"<br>";
}


document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

```

### for in
- It loops through the properties of an object.
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const person = {name:"Ajay", city:"Chennai"}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>

```
### for of
- The for of in js loops through the values of iterable objects like array, strings,Maps,Nodelist.
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
const fruits = ["apple", "mango", "orange", "lemon"];
let len = fruits.length;
let text = "";
for(i of fruits){
	text+=i+"<br>";
}


document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
```

### while Loop;

- The `while` loop goes through a code block till a condition is true.
- syntax:
```javascript
    while (condition) {
    // code block to be executed
    }
```
```html
    <!DOCTYPE html>
    <html>
    <body>
    <p id="demo"></p>

    <script>
    let text = "";
    let i = 1;
    while (i <= 10) {
    text += "  " + i;
    i++;
    }
    document.getElementById("demo").innerHTML = text;
    </script>

    </body>
    </html>

```
### do.. While:
- The `do while` loop is similar to while loop but it does one loop without checking the condition.When it loops again it checks the condition.
```javascript
    do {
    // code block to be executed
    }
    while (condition);
```

```html
<!DOCTYPE html>
<html>
<body>
<p id="demo"></p>

<script>
let text = "";
let i = 10;
do {
  text += "  " + i;
  i--;
}while (i > 0)
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

```
## Other Statements:
### Break:
- the `break` statements jumps out of a loop or terminates a loop.
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
let text = "";
for (let i = 1; i < 10; i++) {
  if (i === 5) { 
  break; 
  }
  text += i + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

```

### Continue:
- The `continue` statement breaks one iteration in the loop ,when specified condition is met.
```html
<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
let text = "";
for (let i = 1; i < 10; i++) {
  if (i === 5) { 
  continue; 
  }
  text += i + " ";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>

```

### Switch:
- The `switch` used to perform one of many code bloacks to be executed.
- syntax:
```javascript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
```html
<!DOCTYPE html>
<html>
<body>

<label>Enter a number from 0 to 6</label><br/>
<input type="text" id="inp">
<input type="submit" onClick=myfunc()>


<p id="demo"></p>

<script>
let day;
function myfunc(){
let text=document.getElementById("inp").value;
switch (Number(text)) {
  case 0:
    day = 0;
    break;
  case 1:
    day = 1;
    break;
  case 2:
    day = 2;
    break;
  case 3:
    day = 3;
    break;
  case 4:
    day = 4;
    break;
  case 5:
    day = 5;
    break;
  case  6:
    day = 6;
  default:
    text = "No value found";
}
document.getElementById("demo").innerHTML = "Entered number is " + day;
}

</script>

</body>
</html>

```


### With statement:
The `with` statement specifies the scope chain for a statement.When the object is specified in the with (), its properties can be used inside with.

```javascript
with (expression) 
  statement
```

```javascript
let a, x, y;
const r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```



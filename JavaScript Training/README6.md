# Milestone 6:
## Mutable and Immutable Concepts:
### Primitive Data types:
- Primitive data types are immutable.
- It is not object because they dont have properties and methods.
- Example of primitive data type:
```javascript
let num = 23;

console.log(typeof num)
```
### Reference Data Type in javascript:
- By default the reference data types are mutable.
- `Functions` , `Arrays` , `Objects` are reference data types.
- Example of reference data type:
```javascript
  const countries = ['India', 'Japan', 'Russia']

   console.log(countries)
```

###### The main distinction between these categories is that Primitives are immutable but References are mutable.

### Mutability in javascript:
- If a data type is mutable, that means that you can change it. Mutability allows you to modify existing values without creating new ones.
- For every object, a pointer is added to the stack, and this pointer points to the object on the heap.
- Ex:
 ```javascript
 const staff = {
         name: "Strengthened",
         age: 43,
         Hobbies: ["reading", "Swimming"]
   }
const staff2= staff;
 staff2.age = 53;
 ```
 - Now, staff and staff2 in stack will points to same object in the heap.So the `staff2.age` will be reflected to the `staff` too.

 -  To oversome this we Have:
    - `Object.assign()`:This will allow `staff2` to point to a new cloned object of `staff` in the heap.So the changes will not affect each other.
    - Ex:
    ```javascript
     const staff = {
         name: "Strengthened",
         age: 43,
         Hobbies: ["reading", "Swimming"]
     }
    const staff2 = Object.assign({}, staff);
    ```

    - `Spread` Operator: Syntax : ` const newObj = {...obj}`
    - Example:
    ```javascript
    const staff = {
        name: "Strengthened",
        age: 43,
        Hobbies: ["reading", "Swimming"]
    }
    const staff2 = {...staff};
    staff2.age = 53;
    ```

### Immutability in javscript:
- Immutability is the state where values are immutable, i.e, cant able to change its value.
- A value is immutable when altering it is impossible.
- Primitive data types are immutable, as we discussed above.
- Ex:
```javascript
const num1 = 10;
const num2 = num1;
console.log(num2) //10
num2 = 20;
console.log(num2) //20
console.log(num1) //10
```
- In the above example , the change in `num2` is not affected the `num1` value.This is because of , `num2` will copy the value of `num1` in a new stack memory.

### Preventing Object Mutability:
- `Object.preventExtensions()`  `Object.seal()`, and `Object.freeze()` methods are used to prevent object from mutability.

#### Object.preventExtensions(obj)
- stops new properties from entering the object. 
- Adding Properties Example using dot operator:
    ```javascript
        const makeNonExtensive = {
           firstname: "Charles",
           lastname: "Chandlier"
   }

   Object.preventExtensions(makeNonExtensive)

   makeNonExtensive.designation = "Software Engineer";
   
   console.log(makeNonExtensive) // this will not cause any error and adds any property to object.
    ```
- defineProperty method:

    ```javascript
        const makeNonExtensive = {
                firstname: "Charles",
                lastname: "Chandlier"
        }

        Object.preventExtensions(makeNonExtensive)

        Object.defineProperty(makeNonExtensive, "age", {
            value: "twenty",
        })

        console.log(makeNonExtensive) 
    ```
    - the above throws this error message: index.js:361 Uncaught TypeError: Cannot define property age, object is not extensible.
    - However using `defineProperty` the existing property can be changed even when `Object.preventExtensions()`.
    - `delete makeNonExtensive.lastname` can also be done to delete existing property.
#### Object.seal():
- Cannot add new properties to a sealed object or delete an existing property from a sealed object.
- But `object.seal` permits modifying existing properties.
- dot operator: doesnt produce errors and fails adding.
- The error message "Uncaught TypeError: Cannot define property student4, the object is not extendable" is thrown when attempting to add the same property using the `define property` method.

#### Object.freeze():
- The Object.freeze() method freezes an object.
- Modifying Existing properties, or adding new properties to the object will not be possible.
- using dot operator will fail silently and using define property throws error.
- Attempting to delete a property on a frozen object also fails silently.

## Primitive and Reference Value
- In JS , a variable can store two types of values, primitive or reference values.
### Primitive Value:
- JavaScript provides six types of primitive values that include Number, String, Boolean, Undefined, Symbol, and BigInt. 
- The size of Primitive values are fixed, therefore JavaScript stores the primitive value in the call stack.
### Reference Value:
- JavaScript provides three types of Reference values that include Array, Object, and Function. 
- The size of a reference value is dynamic therefore It is stored on Heap.
- When we access a reference value, we manipulate it through reference, not through its actual value that is stored. 

### Stack and heap memory:
- When declaring variable JS engine allocates its memory in two memory location
#### Stack: 
- It is fixed includes: primitive value and reference value that refer to objects.
- Consider:
```javascript
    const staff = {
         name: "Strengthened",
         age: 43,
         Hobbies: ["reading", "Swimming"]
   }
const staff2= staff;
 staff2.age = 53;

```
- In the above snippet staff and staff2 are stored in stack memory.

#### Heap :
- Objects are stored on heap.Doesnt allocate fixed amount of memory for these objects.
- Consider:
```javascript
    const staff = {
         name: "Strengthened",
         age: 43,
         Hobbies: ["reading", "Swimming"]
   }
const staff2= staff;
 staff2.age = 53;

```
- In the above snippet staff object alone stored in heap. The variable or reference object in stack will have a pointer in heap memory.

### Dynamic Properties:
- A reference value used to add, change or delete properties.
```html
<!DOCTYPE html>
<html>
<body>

<input type="text" id="input" name="input" placeholder="Enter to change name">
<input type="submit" onclick="sample()"><br><br>
<button onclick="delete1()">DeleteCity</button><br><br>
<button onclick="add1()">AddCity</button>

<p id="demo"></p>

<script>
  const info = {
           name: "Ajay",
           city: "Chennai"
   }

   function sample(){
     const x= document.getElementById("input").value;
     info.name=x;
     document.getElementById("demo").innerHTML = "Name: " + info.name + "<br>" + " City: " + info.city ;
   }
   
   function delete1(){
     delete info.city;
     document.getElementById("demo").innerHTML = "Name: " + info.name + "<br>" + " City: " + info.city ;
   }
   
   function add1(){
     Object.defineProperty(info, "city", {
        value: "Chennai",
    })
     document.getElementById("demo").innerHTML = "Name: " + info.name + "<br>" + " City: " + info.city ;
   }
   
   
  
 document.getElementById("demo").innerHTML = "Name: " + info.name + "<br>" + " City: " + info.city ;
</script>

</body>
</html>

```
- The JS allows adding a property to a primitive value but it doesnt have any effect.

```javascript
let name = 'Robert';
name.lname = 'Angier';

console.log(name.lname); // undefined

```

### Copying Values:
- When we assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value and assigns it to the variable.
- When we assign a reference value from one variable to another, the JavaScript engine creates a reference so that both variables refer to the same object on the heap memory. This means that if you change one variable, it’ll affect the other.
- Copying in js is done by:
    - Using `spread` syntax.
    - Using `Object.assign()` method.
    - Using `JSON.stringify()` and `JSON.parse()`.
#### Shallow Copy:
- A shallow copy means that some values are still connected to the original variable.A nested reference value inside a object can be a shallow copy when copied using spread or assign().
```javascript
let person1 = {
    firstName: 'Robert',
    lastName: 'Angier',
    address: {
        street: '15th street',
        city: 'south Los Alamos',
        state: 'New Mexico',
        country: 'USA'
    }
};
let person2 = Object.assign({}, person);
person2.firstName = 'Alfred'; // disconnected
person2.address.street = 'Amphitheatre Parkway'; // connected
person2.address.city = 'Mountain View'; // connected
console.log(person2);
```
- Eventhough the person2 is copied with a new object of person1, the address reference value inside both the person1 and person2 has pointing to same address of reference value `address`. This is called shallow Copy.

#### Deep Copy:
- This replaces the `spread` and `Object.assign()` behaviour.
- It uses JSON Methods to carry a deep copy of the object.
```javascript
let person1 = {
    firstName: 'Robert',
    lastName: 'Angier',
    address: {
        street: '15th street',
        city: 'south Los Alamos',
        state: 'New Mexico',
        country: 'USA'
    }
};
let person2 = JSON.parse(JSON.stringify(person1));
person2.firstName = 'Alfred'; // disconnected
person2.address.street = 'Amphitheatre Parkway'; // connected
person2.address.city = 'Mountain View'; // connected
console.log(person2);
```

### Argument Passing:
- The arguments are the objects passed to a function.
#### Argument Object:
- The argument object is used to anlayse the argument passed to a function where the function is defined without parameters.
```javascript
function sample() {
    let i;
    let a;
    for (i = 0; i < arguments.length; i++) {
        a+=i;
    }
    return a;
}
console.log(sample(10, 12, 500, 5, 440, 45));
```

#### Argument Pass by Value:
- In a function call, the parameters are called as arguments.
- Pass-by value sends the value of the variable to the function.
- In JS, primitive data types (e.g., numbers, strings, booleans, null, undefined, and symbols) are passed by value.
```javascript
function changeValue(value) {
    value = 42;
    console.log("Inside function:", value); // Outputs: 42
}

let number = 10;
console.log("Before function call:", number); // Outputs: 10

changeValue(number);
console.log("After function call:", number); // Outputs: 10

```
#### Argument Pass by reference:
- In java script ,object are passed by reference:
- Changes inside the function is reflected to the entire flow of code.
```javascript
function changeProperty(obj) {
    obj.property = "Changed!";
    console.log("Inside function:", obj.property); // Outputs: Changed!
}

let myObject = { property: "Original" };
console.log("Before function call:", myObject.property); // Outputs: Original

changeProperty(myObject);
console.log("After function call:", myObject.property); // Outputs: Changed!
```

### Determining Types:
- determining type is an essential feature for understanding how it will behave when passes to functions.
#### Primitive value types:
- The `typeof` keyword is used to determine type for primitive values.
```javascript
let a;
console.log(typeof a); // "undefined"

let c = true;
console.log(typeof c); // "boolean"

let d = 42;
console.log(typeof d); // "number"

let e = "Hello";
console.log(typeof e); // "string"

let f = Symbol("id");
console.log(typeof f); // "symbol"

let g = 10n;
console.log(typeof g); // "bigint"

```

#### Reference value type:
- `typeof` keyword returns only `object` for a reference value
- to determine whether it is object or array or function ,a different approach is undertaken.
- `Array.isArray` is used to check whether it is array or not.
```javascript
let obj = { key: "value" };
console.log(typeof obj); // "object"

let arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true (better way to check for arrays)

function func() {
    return "Hello";
}
console.log(typeof func); // "function"
```
## Execution context and Scope:
- Execution context in JavaScript is the environment in which JavaScript code is executed.
- It contains information about the current scope, variables, and functions.
- There are two types of execution contexts: global and function.
- global execution context is created when a js script first starts to run, function execution context is created when a function is called.

### Phases of Execution Context:

###### 1. Creation Phase:
- In this phase, the JavaScript engine creates the execution context and sets up the script's environment.
- It determines the values of variables and functions and sets up the scope chain for the execution context.

###### 2. Execution Phase:
- In this phase, the JavaScript engine executes the code in the execution context.
- It processes any statements or expressions in the script and evaluates any function calls.


Execution Context for a function contains following information:
- current scope.
- variables
- functions

### Call Stack:
- To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack.
- Also known as 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.
- It uses the LIFO principle (Last-In-First-Out).
- When a function is called, it adds the function to this stack, repeats this process for all invoked function.Once the function is returned value , it removed from the Call stack.

### Scope Chain Augmentation:
- Scope determines the accessibility of variables and functions different parts of a program flow.
- There are three types of scopes available in JavaScript: Global Scope, Local / Function Scope, and Block Scope. 
- Global Scope: This means that all the variables that have global scope can be easily accessed from anywhere within the code or a program.
- Local / Function Scope: Variables that are declared inside a function or a method have Local or Function Scope.Can be accesses within that.
- Block Scope: User can define block using `{}` to define the scope.

- Scope chain augmentation refers to the process of adding new scopes or modifying existing ones within the scope chain. 
- This often occurs during the execution of functions.
#### `with` Statement:
- The with statement extends the scope chain for a statement block. This is often discouraged due to potential performance issues and readability concerns.
```javascript
var obj = {a: 1, b: 2};

with (obj) {
  console.log(a); // 1
  console.log(b); // 2
}

```

#### Closures:
- When a function is defined inside another function, the inner function has access to the outer function’s scope. This is known as a closure.

```javascript
function outer() {
  var outerVar = 'I am from outer scope';

  function inner() {
    console.log(outerVar); // I am from outer scope
  }

  return inner;
}

var innerFn = outer();
innerFn();

```
#### `eval()` function:
- The eval function can execute code within the current scope, potentially adding new variables to it.
```javascript
var x = 10;
eval('var y = 20;'); // y is dynamically added to scope when eval called here.
console.log(x + y); // 30

```
### No Block-Level Scopes:
- Before the introduction of ES6 , JavaScript had function-level scope but no block-level scope.This means that function will follow scope but the block like if, for loop whose inner variable will act as global.
- Variables declared with var inside a function were scoped to that function.
#### Before ES6:
```javascript
if (true) {
  var y = 20;
}
console.log(y); // 20  , y is accessible outside.

```

- ES6 introduced let and const, which allow for block-level scoping. This means variables declared with let or const are only accessible within the block they are defined in.
```javascript
if (true) {
  let z = 30;
  const w = 40;
  console.log(z); // 30
  console.log(w); // 40
}
console.log(z); // ReferenceError: z is not defined
console.log(w); // ReferenceError: w is not defined

```
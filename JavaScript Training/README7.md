# Milestone 7:
## Garbage Collections:
- The automatic process of making space in a computer's memory by removing data that is no longer required or in use is called as Garbage Collections.

- Low-level languages require the developer to manually determine to free the memory allocation when not needed.But in High-level languages like javascript, it uses Garbage collection.

### Garbage Collection in javascript:
- The main concept of the algorithms designed for garbage collection is the concept of reference.
- An object can have a reference to another object if the previous object has access to the latter.

### Reference Counting Algorithm:
- This algorithm is considered to be the most basic kind of garbage collection algorithm.
- rather than determining whether any resource is important or not it scans the memory to determine if an object has any other objects referring to it. An object with zero references is considered to be garbage or `collectible`.

```javascript 
let a = {
    b:{
        c:5;
    }
}

let x = a  // the above object has two poiting reference x and a.

a = 9; // object has one pointing reference which is `x`

y = x.b;

x = 8; //the obj is not reference poiting any var but it cant able garbage collected since its property `b` is pointed by y.

y = null; //The object now has no reference pointing thus it can be garbage collected.

```
#### Limitation of Reference Counting Algorithm:
- A circular reference occurs when two objects are created with properties that refer each other, thus creating a cycle. 
- The reference-counting algorithm fails to reclaim these memory resources as each object has at least one reference pointing to them.
```javascript
function Demo() {
    let one = {};
    let two = {};

    // one reference to two
    one.object = two;

    // two reference to one
    two.object = one;

    return 'circular';
}
```
#### Strong Reference:
- A strong reference means that as long as the reference exists, the referenced object cannot be garbage collected.
```javascript
let obj1 = { name: 'Alice' };
let obj2 = obj1;

console.log(obj2.name); // Output: Alice

obj1 = null;

// obj2 still holds a strong reference to the object
console.log(obj2.name); // Output: Alice

```
#### Weak Reference:
- A weak reference does not prevent the referenced object from being garbage collected.
- `weakmap` is used here to make a weak reference to a object.
```javascript
let obj3 = { name: 'Bob' };

const weakMap = new WeakMap();
weakMap.set(obj3, 'some value');

console.log(weakMap.get(obj3)); // Output: some value

obj3 = null;

// At this point, the object { name: 'Bob' } is eligible for garbage collection

```

### Mark and Sweep Algorithm:
- This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".
- This algorithm starts from the `root` object.
- From root object this algorithm analyse all the reachable(tracable) object through references.
- This algorithm is an improvement over the previous one since an object having zero references is effectively unreachable.
- It should do two main things
  - It should be able to detect all the unreachable objects.
  - It must reclaim the heap space used by the garbage objects.
- This algorithm composed of two phases.
  - Mark Phase
  - Sweep Phase

#### Mark Phase:
- All the objects are marked with `0` or `false` when its created.
- In Mark phase, all the reachable objects are set to `true` or `1`.
- A graph traversal approach is undertaken here( Depth-first search).
- All the objects are considered as a node, it traces all the reachable node from the root object.

#### Sweep Phase:
- As the name suggests it “sweeps” the unreachable objects.
- It clears the heap memory for all the unreachable objects.
- After the mark phase is over , the objects with marked bit or value of `0` or `false` are removed from the heap memory.

#### Example Snippet:
```javascript
function example() {
  let obj1 = { name: 'Alice' };
  let obj2 = { name: 'Bob' };
  let obj3 = { name: 'Charles'};
  obj1.friend = obj2; // obj1 references obj2

  return obj1;
}

let myObj = example(); 
```

##### Mark Phase:
1. Start from the root object (myObj).
2. Mark myObj as reachable.
3. Follow the reference from myObj to obj1.
4. Mark obj1 as reachable.
5. Follow the reference from obj1 to obj2.
6. Mark obj2 as reachable.

##### Sweep Phase:
1. Traverse all objects in the heap.
2. Collect (delete) objects that were not marked as reachable. Since obj1 and obj2 are reachable, they will not be collected.
3. But obj3 is not reachable and havnt got marked.Therefore obj3 will be collected (deleted) as Garbage Collection.


## Memory Management:
- Javascript automatically allocates memory when a object is created and frees it when they are not used anymore.
#### Memory Life cycle:
- The memory lifecycle will have the following phases.
    - Allocation of memory
    - Usage of allocated memory to read and write.
    - Release the allocated memory when it is not needed anymore.
#### Allocation using values:
```javascript
const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values
```
#### Allocation using function calls:
- Some function calls results in object allocation.
```javascript
const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element
```

#### JS Engine Storage:
- The JS engine Storage composed of two memory
  - Stack memory
  - Heap memory

##### Stack Memory:
- It contains the primitive data type and values.
- The size is known at compile time and fixed.
- So it allocates fixed amount of memory.

##### Heap Memory:
- It contains Objects,functions and arrays.
- The size is known at run time.
- No limit to the amount of memory.

#### Memory Leaks:
- A memory leak, is a memory allocation that the JavaScript engine is unable to recover.
- When we add objects and variables in program, js allocates memory and it is intelligent enough to release the memory when the objects are no longer required.

Most common JavaScript memory leaks, includes:
##### Global variables:
- When data is being stored in global variables, it causes memory leaks 
- e.g the use of var in the code instead of let or const, also undeclared variables are being stored in the global object.

```javascript
name = "ajay";
var name2 = "saran"; //both variable stored in global object.
```

##### Closure:
- A Closure is the combination of a function bundled together.
- A clousre is the one in which the nested function uses the scope or has the access to its parent function.
- Variable that has scope inside the function are cleaned up once the function call is over.
- Whereas variables that are scoped by a closure still have referenced after the function has finised running.
```javascript
function sample(){
  lt var1 = "Hello";
  function sample2(){
    let var1 = "Hey!";
    console.log(var1.toUpperCase());
  }
  sample2();
}
```
- In the above example, the `sample` function had never returned value,and cant reached by garbage collector.
- It increases size through repeated calls.To rsolve this,the variables in outer function `sample` is either have to used or returned.

##### Forgotten timers:
- The timer function `SetTimeout` and SetInterval in JS causes memory leak in the following way:
```javascript
const add = {};
const diffInterval = setInterval(function(){
  doSomething(add);
},2000);
```
- The above code runs the function every 2 seconds by using SetInterval on this function, it calls on the specified interval repeatedly and results in a huge size of memory.
- To resolve this, clearInterval() can be used when the function not needed anymore, `clearInterval(differentInterval)`.
##### Out of DOM reference:
```javascript
let father = document.getElementById("father");
let son = document.getElementById("son");
function removeSon(){
  son.remove();
}

father.addEventListener("click",removeSon);
```
- As the event listener is constantly active and contains the son reference; even after the son element was deleted from the DOM, in the code above upon the father clicks, the son variable continues to hold memory.
- The reason is the garbage collector is unable to release the son object and will keep using memory.
- When the event listener is no longer required, it should be unregister.
```javascript
let father = document.getElementById("#father");
let son = document.getElementById("#son");
function removeSon(){
  son.remove();
}

father.addEventListener("click",removeSon);
father.removeEventListener("click",removeSon);
```

## Performance 
#### Memory Leaks:
- Occur when memory that is no longer needed is not released.
- causes includes:
  - Global variables
  - Closures
  - EventListeners
#### Managing memory efficiently:
- Avoid Global Variables
- Proper Scope Management
- Remove Event Listeners
- Use Weak References: `WeakMap` and `WeakSet`
#### Optimizing Garbage Collection:
- Avoid Large Object Graphs
- Minimize Long-Lived Objects.
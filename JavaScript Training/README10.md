# Milestone 10 : Object Oriented Programming
- In JavaScript, OOP (Object-Oriented Programming) is a paradigm that uses objects and classes to structure and manage code.

## Understanding Objects: 
- In JavaScript, objects are collections of key-value pairs.
- Keys are strings , and values can be any data type, including functions.
```js
const person = {
  name: 'Ajay',
  city: 'Chennai',
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person.name);
person.greet();
```
## types of properties:
- properties of an object can be,
    - Data property : Stores values.
    - Accessor property: Getter and Setter methods.

## Defining Multiple properties:
- Objects can be defined with multiple property.
```js
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
  
  
  start() {
    console.log(this.brand+'Car started');
  }
};

car.start(); // Output: Car started

```
## Reading Property Attributes
- Attributes can be read by  `Object.getOwnPropertyDescriptor` or by directly accessing them.
```js
const person = {
  name: 'Ajay',
  city: 'Chennai'
};

const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// { value: 'Ajay', writable: true, enumerable: true, configurable: true }
```
## Object Creation:
The Objects in javascript can be created using various ways.
### Object literals
```js
const person = {
  name: 'Ajay',
  city: 'Chennai'
};
```
### Contructor Functions:
```js
function Person(name, city) {
  this.name = name;
  this.city = city;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name + ' from ' + this.city);
};

const info = new Person('Ajay', 'Chennai');
info.greet();

// Hello, my name is Ajay from Chennai
```
### Using ES6 Class :
```js
class Person {
    constructor(name,city){
        this.name = name;
        this.city = city;
    }
    getInfo(){
        console.log('Hello, my name is ' + this.name + ' from ' + this.city)
    }
 
}

const info = new Person('Ajay', 'Chennai');
info.getInfo();

// Hello, my name is Ajay from Chennai
```

## Creational Pattern:
### Factory Pattern:
- The Factory Design Pattern is a creational pattern that allows for the creation of objects without exposing the creation logic to the client.
```js
// Base class
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    getType() {
        return 'Generic Vehicle';
    }
}

// Subclass Car
class Car extends Vehicle {
    constructor(name) {
        super(name);
    }

    getType() {
        return 'Car';
    }
}

// Subclass Bike
class Bike extends Vehicle {
    constructor(name) {
        super(name);
    }

    getType() {
        return 'Bike';
    }
}

// Factory class
class VehicleFactory {
    static createVehicle(type, name) {
        switch (type) {
            case 'car':
                return new Car(name);
            case 'bike':
                return new Bike(name);
            default:
                throw new Error('Invalid vehicle type');
        }
    }
}

// Usage
try {
    const myCar = VehicleFactory.createVehicle('car', 'Toyota');
    console.log(`${myCar.name} is a ${myCar.getType()}`); // Outputs: Toyota is a Car

    const myBike = VehicleFactory.createVehicle('bike', 'Harley');
    console.log(`${myBike.name} is a ${myBike.getType()}`); // Outputs: Harley is a Bike

} catch (error) {
    console.error(error.message); // Outputs: Invalid vehicle type
}

```
### Abtract Factory Pattern:
- Abstract Factory Pattern is to abstract the process of object creation by defining a family of related factory methods, each responsible for creating a different type of object.
```js
// Abstract Product A
class Button {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Abstract Product B
class Checkbox {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Concrete Product A1
class LightButton extends Button {
    render() {
        console.log("Rendering light-themed button");
    }
}

// Concrete Product B1
class LightCheckbox extends Checkbox {
    render() {
        console.log("Rendering light-themed checkbox");
    }
}

// Concrete Product A2
class DarkButton extends Button {
    render() {
        console.log("Rendering dark-themed button");
    }
}

// Concrete Product B2
class DarkCheckbox extends Checkbox {
    render() {
        console.log("Rendering dark-themed checkbox");
    }
}

// Abstract Factory
class ThemeFactory {
    createButton() {
        throw new Error("Method 'createButton()' must be implemented.");
    }

    createCheckbox() {
        throw new Error("Method 'createCheckbox()' must be implemented.");
    }
}

// Concrete Factory 1
class LightThemeFactory extends ThemeFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckbox();
    }
}

// Concrete Factory 2
class DarkThemeFactory extends ThemeFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckbox();
    }
}
 
// Client Code
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();
    
    button.render();
    checkbox.render();
}

// Usage
const lightFactory = new LightThemeFactory();
renderUI(lightFactory); // Outputs: Rendering light-themed button \n Rendering light-themed checkbox

const darkFactory = new DarkThemeFactory();
renderUI(darkFactory); // Outputs: Rendering dark-themed button \n Rendering dark-themed checkbox
```
### Builder Pattern:
- The Builder design pattern is a creational design pattern used to construct complex objects by separating the construction process from the actual representation.
```js
class User {									 
    constructor(name) {						 
        this.name = name; 
        this.age = null; 
        this.weight = null; 
        this.address = null; 
        this.gender = null; 
    } 
    
}

class userbuilder{
    constructor(name){
        this.user = new User(name);
    }
    setAge(age) {								 
        this.user.age = age; 
        return this; 
        } 
        
    
    setWeight(weight) {						 
        this.user.weight = weight; 
        return this; 
    } 
    
  
    setAddress(address) { 
        this.user.address = address; 
        return this; 
    } 
   
    setGender(gender) { 
        this.user.gender = gender; 
        return this; 
    } 
    
   
    build() { 
        if (!this.user.name) { 
        throw Error('Name is required'); 
        } 
        return this; 
    } 

}
     
    
    
    const userinfo = new userbuilder('Cliff').setAge(50).setAddress('Hollywood Hills').setGender('Male').setWeight(70).build();
    
  
    
    
    console.log(userinfo);
    
```
### Prototype Pattern:
- A Prototype Method is a JavaScript design pattern where objects share a common prototype object, which contains shared methods.
```js
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        console.log(`Starting ${this.make} ${this.model}`);
    }
}

const prototypeVehicle = new Vehicle('Generic Make', 'Generic Model');

class Car {
    constructor(make, model) {

        this.vehicle = Object.create(prototypeVehicle);
        
        this.vehicle.make = make;
        this.vehicle.model = model;
    }

    start() {
       
        this.vehicle.start();
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.start();
console.log(`Starting ${prototypeVehicle.make} ${prototypeVehicle.model}`);

```
### Singleton pattern:
- Singleton pattern is a design pattern which restricts a class to instantiate its multiple objects. 
```js
class Singleton {
   
    static #instance;

    constructor() {
        if (Singleton.#instance) {
            throw new Error("Singleton instance already exists. Use getInstance method.");
        }
       
        this.data = Math.random(); 
    }

   
    static getInstance() {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }
}

try {
    const singletonInstance1 = Singleton.getInstance();
    console.log(singletonInstance1);

   
    const singletonInstance2 = new Singleton();
} catch (error) {
    console.error(error.message); 
}

```
## Constructor pattern:
- With function
```js
function Person(name, city) {
  this.name = name;
  this.city = city;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name + ' from ' + this.city);
};

const info = new Person('Ajay', 'Chennai');
info.greet();
```
- With class
```js
class Person {
    constructor(name,city){
        this.name = name;
        this.city = city;
    }
    getInfo(){
        console.log('Hello, my name is ' + this.name + ' from ' + this.city)
    }
 
}

const info = new Person('Ajay', 'Chennai');
info.getInfo();
```
### Combination of constructor and prototype:
- This approach allows you to create object instances with shared methods defined on the prototype.
```js
function Person(name, city) {
  this.name = name;
  this.city = city;
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name + 'from' + this.city);
};

const info = new Person('Ajay', 'Chennai');
info.greet();

```
## Structural Pattern:
### Adaptor pattern:
```js
class OldCalculator {
    constructor() {
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return term1 + term2;
          case 'sub':
            return term1 - term2;
          default:
            return NaN;
        }
      };
    }
  }

class NewCalculator {
    constructor() {
      this.add = function(term1, term2) {
        return term1 + term2;
      };
      this.sub = function(term1, term2) {
        return term1 - term2;
      };
    }
  }
  
  class CalculatorAdapter {
    constructor() {
      const newCalculator = new NewCalculator();
      this.operations = function(term1, term2, operation) {
        switch (operation) {
          case 'add':
            return newCalculator.add(term1, term2);
          case 'sub':
            return newCalculator.sub(term1, term2);
          default:
            return NaN;
        }
      };
    }
  }

const oldCalc = new OldCalculator();

const adaptedCalc = new CalculatorAdapter();

console.log(oldCalc.operations(3, 2, 'add')); // Output: 5
```

### Bridge Pattern:
- The Bridge pattern is about separating an abstraction from its implementation so that both can be modified independently.
```js
class Device {
  turnOn() {
    throw new Error('This method should be overridden');
  }
  
  turnOff() {
    throw new Error('This method should be overridden');
  }
}


class TV extends Device {
  turnOn() {
    console.log('Turning on the TV');
  }
  
  turnOff() {
    console.log('Turning off the TV');
  }
}


class Stereo extends Device {
  turnOn() {
    console.log('Turning on the Stereo');
  }
  
  turnOff() {
    console.log('Turning off the Stereo');
  }
}


class RemoteControl {
  constructor(device) {
    this.device = device;
  }
  
  pressPowerButton() {
    
    console.log('Pressing power button');
    this.device.turnOn();
  }
}


class AdvancedRemoteControl extends RemoteControl {
  mute() {
    console.log('Muting device');
    
  }
}

const tv = new TV();
const stereo = new Stereo();

const tvRemote = new RemoteControl(tv);
const stereoRemote = new RemoteControl(stereo);
const advancedRemote = new AdvancedRemoteControl(tv);

tvRemote.pressPowerButton(); // Turning on the TV
stereoRemote.pressPowerButton(); // Turning on the Stereo
advancedRemote.pressPowerButton(); // Turning on the TV
advancedRemote.mute(); // Muting device

```

### Composite Pattern:
- Treats objects as tree structures to represent part-whole hierarchies.

```js
// Component
class FileSystemComponent {
  constructor(name) {
    this.name = name;
  }
  
  getSize() {
    throw new Error('This method should be overridden');
  }
  
  print() {
    throw new Error('This method should be overridden');
  }
}

// Leaf
class File extends FileSystemComponent {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  
  getSize() {
    return this.size;
  }
  
  print() {
    console.log(`File: ${this.name} (${this.size} KB)`);
  }
}

// Composite
class Directory extends FileSystemComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }
  
  add(component) {
    this.children.push(component);
  }
  
  getSize() {
    return this.children.reduce((total, child) => total + child.getSize(), 0);
  }
  
  print(indent = '') {
    console.log(`${indent}Directory: ${this.name}`);
    this.children.forEach(child => child.print(indent + '  '));
  }
}

// Client code
const file1 = new File('file1.txt', 50);
const file2 = new File('file2.txt', 30);
const dir1 = new Directory('dir1');
const dir2 = new Directory('dir2');

dir1.add(file1);
dir1.add(file2);
dir2.add(dir1);

console.log(`Total size of dir2: ${dir2.getSize()} KB`);
dir2.print();

```

### Decorated Pattern:
- Extends object behaviour dynamically without affecting the original object.

```js
class User{
    constructor(name){
        this.name = name;
    }
    
    getInfo(){
        console.log('Name: '+this.name);
    }
}

class decoratedUser{
    constructor(user,city,country){
        this.user = user;
        this.city = city;
        this.country = country;
    }
    
    getInfo(){
        console.log('Name: '+this.user.name + '  City: '+this.city + '  Country: '+this.country);
    }
}

const user = new User('Ajay')
const fullInfo = new decoratedUser(user,'Chennai','India')
user.getInfo()
fullInfo.getInfo()
```
### Farcade Design Pattern
- shields clients from complex functionality in one or more subsystems.
```js
class DVDPlayer{
    constructor(movie){
        this.movie = movie;
        this.name = 'DVD Player'

    }

    on(){
        console.log("DVD Player is starting...")
    }

    play(){
        console.log('Playing Movie : '+ this.movie);
    }

    off(){
        console.log("Turning off DVD Player... Thank You")
    }
}

class Projector{
    constructor(input){
        this.input = input
    }

    onProjector(){
        console.log("Turning On Projector")
    }

    inp(){
        console.log('Connected to ' + this.input.name)
    }

    offProjector(){
        console.log("Turning Off Projector")
    }

}

class SoundSystem{
    onSound(){
        console.log('Turning on ... Dolby Atmos sound system');
    }

    setVolume(vol){
        console.log("Volume set to "+ vol)
    }

    offSound(){
        console.log("Turning off Sound System");
    }
}


class HomeTheatre{
    constructor(dvd , projector , sound){
        this.dvd = dvd;
        this.projector = projector;
        this.sound = sound;
    }

    WatchMovie(){
        this.projector.onProjector();
        this.sound.onSound();
        this.projector.inp();
        this.dvd.on();
        this.dvd.play();
    }
    
    EndMovie(){
        this.dvd.off();
        this.sound.offSound();
        this.projector.offProjector();
    }


}


const dvd = new DVDPlayer('Man Of Steel');
const projector = new Projector(dvd);
const sound = new SoundSystem();
const Movie = new HomeTheatre(dvd,projector,sound);
Movie.WatchMovie();
console.log('\n ----------------------------------- \n')
Movie.EndMovie();
```
### Proxy Pattern:
- Retricts the access to use the objects of a class.
```js
class Person {
    constructor(name, city) {
      this.name = name;
      this.city = city;
    }
    
    getDetails() {
      return `Name: ${this.name}, City: ${this.city}`;
    }
  }
  
  
  class PersonProxy {
    constructor(person,log) {
      this.person = person;
      this.log = log;
    }
    
    getDetails() {
        if(this.log == 'admin'){
            console.log('Accessing person details...');
            return this.person.getDetails();
        }
        else{
            return "Access Denied !"
        }
      
    }
  }
  
 
  const person = new Person('Ajay', 'Chennai');
  const personProxy = new PersonProxy(person,'admin');
  
  console.log(personProxy.getDetails());
  
```
### Flyweight Pattern:
```js
class Shape {
    constructor(type) {
      this.type = type;
    }
    
    draw(x, y) {
      throw new Error('This method should be overridden');
    }
  }

  class Circle extends Shape {
    constructor(color) {
      super('Circle');
      this.color = color;
    }
    
    draw(x, y) {
      console.log(`Drawing a ${this.color} Circle at (${x}, ${y})`);
    }
  }
  

  class ShapeFactory {
    constructor() {
      this.shapes = {};
    }
    
    getShape(color) {
      if (!this.shapes[color]) {
        this.shapes[color] = new Circle(color); 
      }
      return this.shapes[color];
    }
  }
  

  const shapeFactory = new ShapeFactory();
  
  const redCircle1 = shapeFactory.getShape('Red');
  const redCircle2 = shapeFactory.getShape('Red');
  const blueCircle = shapeFactory.getShape('Blue');
  
  redCircle1.draw(10, 20); 
  redCircle2.draw(30, 40); 
  blueCircle.draw(50, 60);
  console.log(redCircle1 === redCircle2); 
  
```
## Dynamic Prototype pattern:
```js
function Info(name){
   this.name = name;

    if(typeof this.getInfo !== 'funtion'){
        Info.prototype.getInfo = function(){
            console.log('Name: '+this.name)
        }
    }
}

if(typeof this.getMsg !== 'funtion'){
    Info.prototype.getMsg = function(){
        console.log('Hello , My name is '+this.name)
    }
}

const person = new Info('Ajay')
person.getInfo();
person.getMsg();
```
## Behavioral pattern
### Chain of Responsibility:
```js
class Handler {
    constructor(successor = null) {
      this.successor = successor; 
    }
  
    handleRequest(request) {
      if (this.successor) {
        this.successor.handleRequest(request); 
      } else {
        console.log('No handler available for request:', request);
      }
    }
  }

  class ConcreteHandler1 extends Handler {
    handleRequest(request) {
      if (request === 'Request1') {
        console.log('ConcreteHandler1 handling request:', request);
      } else {
        super.handleRequest(request); 
      }
    }
  }

  class ConcreteHandler2 extends Handler {
    handleRequest(request) {
      if (request === 'Request2') {
        console.log('ConcreteHandler2 handling request:', request);
      } else {
        super.handleRequest(request); 
      }
    }
  }
  

  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2(handler1);
  
  handler2.handleRequest('Request1'); 
  handler2.handleRequest('Request2'); 
  handler2.handleRequest('Request3'); 
  
```
### Command method design pattern:
```js
class Command {
    execute() {
      throw new Error("This method should be overridden");
    }
  }

class Light {
    turnOn() {
      console.log("Light is ON");
    }
    
    turnOff() {
      console.log("Light is OFF");
    }
  }
  
  class TurnOnLightCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffLightCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  class RemoteControl {
    constructor() {
      this.command = null;
    }
  
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }

const light = new Light();

const turnOn = new TurnOnLightCommand(light);
const turnOff = new TurnOffLightCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton();

remote.setCommand(turnOff);
remote.pressButton(); 
```
### Strategy Pattern:
```js
class TextFormatter {
    format(text) {
      throw new Error("This method should be overridden");
    }
  }
  
class UppercaseFormatter extends TextFormatter {
    format(text) {
      return text.toUpperCase();
    }
  }
  
  class LowercaseFormatter extends TextFormatter {
    format(text) {
      return text.toLowerCase();
    }
  }
  
  class CapitalizeFormatter extends TextFormatter {
    format(text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
  }
  class TextEditor {
    constructor(formatter) {
      this.formatter = formatter;
    }
  
    setFormatter(formatter) {
      this.formatter = formatter;
    }
  
    formatText(text) {
      return this.formatter.format(text);
    }
  }
  const text = "hello world";

const uppercaseFormatter = new UppercaseFormatter();
const lowercaseFormatter = new LowercaseFormatter();
const capitalizeFormatter = new CapitalizeFormatter();

const editor = new TextEditor(uppercaseFormatter);
console.log("Uppercase:", editor.formatText(text)); // Output: HELLO WORLD

editor.setFormatter(lowercaseFormatter);
console.log("Lowercase:", editor.formatText(text)); // Output: hello world

editor.setFormatter(capitalizeFormatter);
console.log("Capitalized:", editor.formatText(text)); // Output: Hello world

```
### Template Method design pattern:
```js
class Beverage {
    prepareRecipe() {
      this.boilWater();
      this.brew();
      this.pourInCup();
      this.addCondiments();
    }
  
    boilWater() {
      console.log("Boiling water");
    }
  
    pourInCup() {
      console.log("Pouring into cup");
    }

    brew() {
      throw new Error("This method should be overridden");
    }
  
    addCondiments() {
      throw new Error("This method should be overridden");
    }
  }
  class Tea extends Beverage {
    brew() {
      console.log("Steeping the tea");
    }
  
    addCondiments() {
      console.log("Adding lemon");
    }
  }
  
  class Coffee extends Beverage {
    brew() {
      console.log("Dripping coffee through filter");
    }
  
    addCondiments() {
      console.log("Adding sugar and milk");
    }
  }

const tea = new Tea();
tea.prepareRecipe();
const coffee = new Coffee();
coffee.prepareRecipe();

```
### Observer Pattern:
```js
class Publish {
  constructor(msg) {
    this.msg = msg;
    this.observers = [];
  }

  addMember(observer) {
    this.observers.push(observer);
  }

  notifyObservers(msg) {
    this.observers.forEach(observer => observer.update(msg));
  }
}

class Observer {
  constructor(name){
    this.name = name
  }
  
  update(msg) {
    console.log(msg + this.name);
  }
}

const group = new Publish();
const mem1 = new Observer('Ajay');
const mem2 = new Observer('Saran');

group.addMember(mem1);
group.addMember(mem2);

group.notifyObservers('Hello ');
```
### Interpreter pattern:
```js
class Expression {
  interpret(context) {
    throw new Error("This method should be overridden");
  }
}
class NumberExpression extends Expression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    return this.number;
  }
}
class AddExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

class SubtractExpression extends Expression {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  interpret(context) {
    return this.left.interpret(context) - this.right.interpret(context);
  }
}

const five = new NumberExpression(5);
const three = new NumberExpression(3);
const two = new NumberExpression(2);

const addExpression = new AddExpression(five, three);     
const subtractExpression = new SubtractExpression(addExpression, two); 
console.log(addExpression.interpret());
console.log(subtractExpression.interpret()); 

```
### Iterator pattern:
```js
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    if (this.hasNext()) {
      return this.items[this.index++];
    }
    return null;
  }
}
class BookCollection {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  getIterator() {
    return new Iterator(this.books);
  }
}

const collection = new BookCollection();
collection.addBook("Book 1");
collection.addBook("Book 2");
collection.addBook("Book 3");

const iterator = collection.getIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}

```
### Visitor Pattern
```js
class AnimalVisitor {
  visitLion(lion) {
    throw new Error("This method should be overridden");
  }

  visitElephant(elephant) {
    throw new Error("This method should be overridden");
  }
}

class FeedVisitor extends AnimalVisitor {
  visitLion(lion) {
    console.log("Feeding the lion.");
  }

  visitElephant(elephant) {
    console.log("Feeding the elephant.");
  }
}

class VetCheckVisitor extends AnimalVisitor {
  visitLion(lion) {
    console.log("Checking the lion's health.");
  }

  visitElephant(elephant) {
    console.log("Checking the elephant's health.");
  }
}
class Animal {
  accept(visitor) {
    throw new Error("This method should be overridden");
  }
}

class Lion extends Animal {
  accept(visitor) {
    visitor.visitLion(this);
  }
}

class Elephant extends Animal {
  accept(visitor) {
    visitor.visitElephant(this);
  }
}

const lion = new Lion();
const elephant = new Elephant();
const feedVisitor = new FeedVisitor();
const vetCheckVisitor = new VetCheckVisitor();

lion.accept(feedVisitor);      
lion.accept(vetCheckVisitor); 
elephant.accept(feedVisitor);      
elephant.accept(vetCheckVisitor); 
```
### Mediator Pattern:
```js
class Mediator {
  send(message, sender) {
    if (sender === 'A') {
      console.log(`Mediator received message from A: ${message}`);
      console.log('Mediator forwards message to B');
    } else if (sender === 'B') {
      console.log(`Mediator received message from B: ${message}`);
      console.log('Mediator forwards message to A');
    }
  }
}

class ColleagueA {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    console.log(`A sends: ${message}`);
    this.mediator.send(message, 'A');
  }
}

class ColleagueB {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    console.log(`B sends: ${message}`);
    this.mediator.send(message, 'B');
  }
}

const mediator = new Mediator();

const colleagueA = new ColleagueA(mediator);
const colleagueB = new ColleagueB(mediator);

colleagueA.send('Hello from A');
colleagueB.send('Hello from B');
```

### Memento Pattern:
```js
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class TextEditor {
  constructor() {
    this.text = "";
  }

  setText(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  save() {
    return new Memento(this.text);
  }

  restore(memento) {
    this.text = memento.getState();
  }
}

class History {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

const editor = new TextEditor();
const history = new History();

editor.setText("Hello");
history.addMemento(editor.save());

editor.setText("Hello, World!");
history.addMemento(editor.save());

editor.restore(history.getMemento(0));
console.log(editor.getText()); 

```
## S.O.L.I.D Principles:
- SOLID is a set of five principles designed to make object-oriented designs more understandable, flexible, and maintainable.
### Single Responsibility Principle (SRP):
- A class should have only one responsibility.
- Violation :
```js
class User {
  constructor(name) {
    this.name = name;
  }

  saveToDatabase() {
    // code to save user to database
    console.log("Saving user to database");
  }

  sendEmail() {
    // code to send an email
    console.log("Sending email");
  }
}

```
- with...
```js
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserDatabase {
  save(user) {
    console.log("Saving user to database");
  }
}

class EmailService {
  send(email) {
    console.log("Sending email");
  }
}

const user = new User("Alice");
const userDatabase = new UserDatabase();
userDatabase.save(user);

const emailService = new EmailService();
emailService.send("alice@example.com");
```
### Open/Closed Principle (OCP):
- Software entities (classes, modules, functions) should be open for extension but closed for modification.
- Violation
```js
class Report {
  generate(type) {
    if (type === 'pdf') {
      // generate PDF report
      console.log("Generating PDF report");
    } else if (type === 'csv') {
      // generate CSV report
      console.log("Generating CSV report");
    }
  }
}
```
- Using this principle:
```js
class Report {
  generate() {
    throw new Error("Method 'generate()' must be implemented.");
  }
}

class PDFReport extends Report {
  generate() {
    console.log("Generating PDF report");
  }
}

class CSVReport extends Report {
  generate() {
    console.log("Generating CSV report");
  }
}


const pdfReport = new PDFReport();
pdfReport.generate();

const csvReport = new CSVReport();
csvReport.generate();
```
### Liskov Substitution Principle (LSP):
- Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.
- Violation:
```js
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly");
  }
}
```
- Using this principle:
```js
class Bird {
  move() {
    console.log("Moving");
  }
}

class Sparrow extends Bird {
  move() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  move() {
    console.log("Waddling");
  }
}

const sparrow = new Sparrow();
sparrow.move(); 

const penguin = new Penguin();
penguin.move(); 
```
### Interface Segregation Principle (ISP):
- Clients should not be forced to depend on interfaces they do not use.
```js
class Printable {
  print() {
    throw new Error("Method 'print()' must be implemented.");
  }
}

class Scannable {
  scan() {
    throw new Error("Method 'scan()' must be implemented.");
  }
}

class Faxable {
  fax() {
    throw new Error("Method 'fax()' must be implemented.");
  }
}
class Printer extends Printable {
  print() {
    console.log("Printing document...");
  }
}

class Scanner extends Scannable {
  scan() {
    console.log("Scanning document...");
  }
}

class MultifunctionPrinter extends Printable {
  print() {
    console.log("Printing document...");
  }

  scan() {
    console.log("Scanning document...");
  }

  fax() {
    console.log("Sending fax...");
  }
}

```
###  Dependency Inversion Principle (DIP):
- High-level modules should not depend on low-level modules. Both should depend on abstractions. 
- Violation:
```js
class LightBulb {
  turnOn() {
    console.log("LightBulb: turned on");
  }
  
  turnOff() {
    console.log("LightBulb: turned off");
  }
}

class Switch {
  constructor(lightBulb) {
    this.lightBulb = lightBulb;
    this.isOn = false;
  }

  operate() {
    if (this.isOn) {
      this.lightBulb.turnOff();
      this.isOn = false;
    } else {
      this.lightBulb.turnOn();
      this.isOn = true;
    }
  }
}
```
- Using this principle:
```js
class Switchable {
  turnOn() {
    throw new Error("Method 'turnOn()' must be implemented.");
  }

  turnOff() {
    throw new Error("Method 'turnOff()' must be implemented.");
  }
}

class LightBulb extends Switchable {
  turnOn() {
    console.log("LightBulb: turned on");
  }
  
  turnOff() {
    console.log("LightBulb: turned off");
  }
}

class Switch {
  constructor(device) {
    this.device = device;
    this.isOn = false;
  }

  operate() {
    if (this.isOn) {
      this.device.turnOff();
      this.isOn = false;
    } else {
      this.device.turnOn();
      this.isOn = true;
    }
  }
}
```
## Parasitic Constructor Pattern
- The parasitic constructor pattern is to create a constructor that simply wraps the creation and return of another object.
```js
function Person(name, city, country){
   var o = new Object();
   o.name = name;
   o.city = city;
   o.country = country;
   o.sayName = function(){
      console.log(this.name);
   };
   return o;
}
var friend = new Person("Ajay", "Chennai", "India");
friend.sayName();
```
## Durable Constructor Pattern:
- The Durable Constructor Pattern ensures that an object is always in a valid state upon creation. 
- It handles initialization, validation, and defaults within the constructor, so the object can be used safely and consistently. 
```js
class Person {
  constructor(name, age) {
    this.name = name || 'Unknown';
    this.age = (age >= 0 && age <= 120) ? age : 'undefined';
  }

  getDetails() {
    return `Name:  ${this.name},Age:  ${this.age}`;
  }
}
const person1 = new Person('Alpha', 30);
console.log(person1.getDetails()); 
const person2 = new Person('Beta');
console.log(person2.getDetails()); 
const person3 = new Person('Charlie', -5);
console.log(person3.getDetails());
```
## Inheritance:
- In JS, inheritance is the method through which the objects inherit the properties and the methods from the other objects.
## Prototype Chaining:
```js
class Person {
  constructor(name, age) {
    this.name = name || 'Unknown';
    this.age = age;
  }

  getDetails() {
    return `Name:  ${this.name},Age:  ${this.age}`;
  }
}

class Student extends Person{
    constructor(name,age,grade) {
    super(name,age)
    this.grade = grade;
  }
  getInfo(){
      return `Name:  ${this.name},Age:  ${this.age} Grade: ${this.grade}`;
  }
}
const person1 = new Person('Alpha', 30);
console.log(person1.getDetails()); 
const person2 = new Student('Beta',20,'A');
console.log(person2.getInfo()); 
 
```
## Constructor Stealing:
- A constructor function is used within another constructor function to inherit or extend its behavior.
```js
function Animal(name) {
  this.name = name;
  this.eat = function() {
    console.log(this.name + ' is eating.');
  };
}
function Dog(name, breed) {
  Animal.call(this, name); 
  this.breed = breed; 
  this.bark = function() {
    console.log(this.name + ' from ' + this.breed +' breed is barking.');
  };
}
const myDog = new Dog('Rex', 'German Shepherd');
myDog.eat(); 
myDog.bark(); 

```

## Combination Inheritance:
- Combination inheritance combines both constructor and prototypal inheritance.
```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
function Dog(name) {
  Animal.call(this, name); 
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log(this.name + ' barks.');
};
const animal = new Animal('Generic Animal');
animal.speak(); 
const dog = new Dog('Rex');
dog.speak(); 
```
## Prototypal Inheritance:
```js
const animal = {
  eat() {
    console.log(this.name + ' is eating.');
  }
};
const dog = Object.create(animal);
dog.bark = function() {
  console.log(this.name + ' is barking.');
};
const myDog = Object.create(dog);
myDog.name = 'Rex';
myDog.eat();  
myDog.bark();

```
## Parasitic Inheritance
- Parasitic inheritance is a pattern in JavaScript where you create a new object based on an existing one, and then extend or modify the new object with additional properties or methods. 
```js
const animal = {
  eat() {
    console.log(this.name + ' is eating.');
  }
};

function createdog(name,breed){
    const dog = Object.create(animal)
    dog.name = name;
    dog.breed = breed;
    dog.bark = function() {
        console.log('The dog '+dog.name+' from '+dog.breed+' breed is barking');
    }
    
    return dog;
}

const myDog = new createdog('Cooper','Labrador');
myDog.eat();  
myDog.bark();

```
## Parasitic Combination Inheritance:
- Combination of parasitic and combination inheritance
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};
function createDog(name) {
  const dog = Object.create(Animal.prototype);
  Animal.call(dog, name);
  dog.speak = function() {
    console.log(this.name + ' barks.');
  };
  return dog;
}
const animal = new Animal('Generic Animal');
animal.speak();
const dog = createDog('Rex');
dog.speak();

```

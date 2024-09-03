# Milestone 4 of NODE JS
## package.json, package-local.json in node js
- `package.json` file plays a crucial role in managing the project's metadata, dependencies, scripts, and configurations while the `package-local.json` file, on the other hand, is less common and typically used for local overrides or specific configurations in certain workflows.

### package.json
- The package.json file is the central file for any Node.js project.
- It contains important information about the project and helps manage the project's dependencies, scripts, and other settings.
#### Key sections:
- The key section includes:
    - Name and Version
    - Description
    - Main
    - Scripts
    - Dependencies
    - DevDependencies
    - Author and License
    - Keywords
    - Engines
    - Bugs and Repository
- Sample template:
```js
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "mocha"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  },
  "author": "Your Name",
  "license": "MIT",
  "keywords": ["nodejs", "express", "api"],
  "engines": {
    "node": ">=14.0.0"
  },
  "bugs": {
    "url": "https://github.com/username/project/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/username/project.git"
  }
}

```

## Dependencies and dev dependencies
-  dependencies and devDependencies are two types of package classifications defined in the package.json file. 

### Dependencies
- Dependencies are packages that your application needs to run in production.
- These packages are essential for your application to function correctly when deployed.
- Example , if the application uses express the dependency will included as,
```js
{
  "dependencies": {
    "express": "^4.17.1"
  }
}

```
### Dev dependencies
- DevDependencies are packages that are only needed during the development and testing phase of your application.
- These packages are not required when the application is running in production.
- To use bootstrap module in the development phase , it have to be included as follows,
```js
{
  "devDependencies": {
   "bootstrap": "^5.3.2",
  }
}
```

## Debugger mode in vs code:
- Visual Studio Code (VS Code) has a powerful built-in debugger that allows you to run and debug your code directly within the editor.
- The debugger helps you inspect the execution of your code, set breakpoints, step through code, and examine variables, among other features.
- Debugging is a powerful tool that helps you observe the behavior of your application and fix issues more efficiently.

### Steps to Debug a code in visual studio:
#### Creation of Node.js project:
- Run this `npm init -y` command to initialize node.js project

#### Writting a sample function:
- Lets write a factorial.js for performing factorial operations.
```js
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

```
#### Configuring the Debugger(launch.json):
##### Open the debug panel:
- Open the Debug Panel: Click on the bug icon on the sidebar or press Ctrl+Shift+D .

##### Create `launch.json`:
- Click create launch.json select "Node.js" as the environment.
- This will create a .vscode folder with a launch.json file.
- launch.json file:
```js
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${workspaceFolder}\\factorial.js"
        }
    ]
}
```

#### Debug the Code:
- Set the Breakpoint on the desired line of the code .Click in the gutter (left of the line numbers) next to the line where the factorial function is called. A red dot will appear, indicating a breakpoint.

- Start Debugging: You can start debugging by clicking on the green play button.

- Inspect the code: The debugger will stop at the breakpoint. You can now:
    - Step Over (F10): Execute the current line and move to the next one.
    - Step Into (F11): Enter the factorial function to see how it's executed.
    - Step Out (Shift+F11): Exit the function and return to the calling code.

- Hover over variables to see their current values.

#### Debug console:
- The Debug Console allows you to interact with your code while it’s paused. You can type JavaScript expressions here to evaluate them on the fly. For example, type factorial(3) in the Debug Console to see the result.

#### Stopping Debugging
- When done with debugging,we can click the red stop button in the Debug toolbar or press Shift+F5 to stop the debugging session.

## Postman tips and tricks:
- Postman is a powerful tool for testing APIs. Here are some tips and tricks to help you get the most out of Postman, including naming collections/routes and using environment variables.
### Naming a Collection:
- A collection in Postman is a way to group related API requests. Naming your collections clearly helps in organizing your API requests.
### Naming a Route:
- Routes in Postman refer to the individual API requests you send. Naming routes (requests) clearly is important for easy identification.
### Using Environment Variables
- Environment variables in Postman allow you to manage different environments (e.g., development, staging, production) by changing key values like base URLs, API keys, or other parameters without manually updating each request.
- Global Variables are accessible across all environments and collections, while Environment Variables are specific to a selected environment.

## Node JS Security
- NodeJS involves protecting your application from common vulnerabilities and ensuring the safety of user data and system integrity. Here’s a breakdown of important security practices in Node.js
### Authentication and Authorization
- Authentication: 
  - Use Strong Password Hashing: Store passwords securely using hashing algorithms like bcrypt. Avoid storing plain text passwords.
  - Implement Multi-Factor Authentication (MFA): Add an extra layer of security by requiring a second form of identification.

- Authorization:
  - Role-Based Access Control (RBAC): Implement RBAC to restrict access based on the user's role (e.g., admin, user, guest).
  - OAuth: Use OAuth protocols for secure authorization in web, desktop, and mobile applications.

### Secure Data Handling:
- Ensure all input data is validated to prevent injection attacks. 
- Strip or encode any potentially malicious input to prevent Cross-Site Scripting (XSS) and other injection attacks.

###  Avoiding Common Vulnerabilities:
- Use parameterized queries or ORM libraries like Sequelize to prevent SQL injection attacks.
- If using NoSQL databases, validate and sanitize input to prevent NoSQL injection attacks.

### Secure Configuration:
- Store sensitive configuration data, such as API keys, database passwords, and secret keys, in environment variables rather than hardcoding them in your source code.
### Package and Dependency Management:
- Regularly Update Dependencies: Use tools like npm audit to scan for vulnerabilities in your dependencies and keep them up to date.

### Session Management:
- Secure Session Cookies: Ensure cookies have the HttpOnly, Secure, and SameSite flags set to protect against XSS, CSRF, and man-in-the-middle attacks.
- Session Expiration: Implement session expiration and re-authentication to reduce the risk of session hijacking.

### Rate Limiting and Throttling:
- Rate Limiting: Use libraries like express-rate-limit to limit the number of requests a user can make to your API within a certain timeframe.
- Throttling: Implement throttling to manage and control the number of requests, preventing server overload and denial-of-service (DoS) attacks.

### Logging and Monitoring:
- Log Suspicious Activities: Keep detailed logs of access attempts, errors, and suspicious activities. Use logging frameworks like Winston or Bunyan.

##  X-powered-by header (Security) - Express application hider
- The X-Powered-By header in Express applications reveals the technology stack used by your server, specifically that it's powered by Express.
- While this might seem harmless, exposing such information can make your application more vulnerable to targeted attacks.

### Why it have to be hidde?
- Security Through Obscurity: By hiding or removing this header, you make it slightly harder for attackers to identify the underlying technology, reducing the chances of automated attacks that target specific versions or vulnerabilities of Express.
- Minimizing Information Disclosure: The less information you reveal about your server's internal workings, the better.

### How to hide?
- `app.disable()` method can be used.

#### Disabling X-Powered-By Header:
```js
const express = require('express');
const app = express();

app.disable('x-powered-by');

```
#### Customizing the X-Powered-By Header:
- This is optional.
- If we prefer to customize rather than completely remove the header, we can use the following code.
```js
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'YourCustomHeaderValue');
  next();
});

```
- can also use helmet to manage security headers.

## mySQL:
### Indexing:
- Indexing in MySQL is a technique used to improve the speed and efficiency of data retrieval operations on database tables.
- An index in MySQL is a data structure (often a B-tree) that allows the database to quickly locate and access the data in a table.

#### Types of Index
##### Primary key Index:
- Automatically created when a primary key is defined on a table.
- Ensures that the column(s) marked as the primary key are unique and not null.
```js
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100),
    Department VARCHAR(50),
    Email VARCHAR(100)
);

```
##### Unique Index:
- Ensures that all values in the indexed columns are unique.
- Automatically created when a unique constraint is defined.
```js
CREATE UNIQUE INDEX idx_unique_email ON Employees(Email);

```
##### Composite Index:
- An index on multiple columns to find a data.
```js
CREATE INDEX idx_name_department ON Employees(Name, Department);

```
##### Full-Text Index:
- Used for searching text within large text fields.
- Consider a table with description coloumn.
```sql
INSERT INTO Products (ProductID, ProductName, Description)
VALUES 
(1, 'Laptop', 'A powerful laptop with 16GB RAM, 512GB SSD, and Intel i7 processor.'),
(2, 'Smartphone', 'A sleek smartphone with a 6.5-inch display, 128GB storage, and a 48MP camera.'),
(3, 'Headphones', 'Wireless headphones with noise-cancelling feature and 20-hour battery life.'),
(4, 'Smartwatch', 'A smartwatch with heart-rate monitoring, GPS, and water resistance up to 50 meters.'),
(5, 'Tablet', 'A lightweight tablet with a 10-inch screen, 64GB storage, and a long-lasting battery.');

CREATE FULLTEXT INDEX idx_description ON Products(Description);

SELECT ProductName, Description 
FROM Products 
WHERE MATCH(Description) AGAINST('laptop');

```
##### Spatial Index:
- MySQL allows the creation of spatial indexes on columns with geometry values that are not null.
- Example could be fetch operation of near by stores from a user location.These values are computed in lat and long value.
```sql
CREATE TABLE Locations (
    LocationID INT PRIMARY KEY,
    StoreName VARCHAR(100),
    GeoLocation POINT,
    SPATIAL INDEX idx_location (GeoLocation)
);

```

## mySQL triggers:
- A MySQL trigger is a database object that automatically executes (or "fires") a specified action in response to certain events on a particular table.
- It is a special type of stored procedure that is invoked automatically in response to an event.

### Types of Triggers
- Based on the timing of the execution, trigger is categorised as,
  - BEFORE trigger : Executed before the specific event on the table.
  - AFTER trigger : Executed after the specific event on the table.

- Each of these can be associated with the following events:
  - INSERT: Triggered when a new row is inserted into the table.
  - UPDATE: Triggered when a row is updated.
  - DELETE: Triggered when a row is deleted.
### Syntax for creating a Trigger.
```sql
CREATE TRIGGER trigger_name
[BEFORE | AFTER] [INSERT | UPDATE | DELETE]
ON table_name
FOR EACH ROW
BEGIN
    -- Trigger logic here
END;

```
### Example:
- Consider the following user table.
```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
);

```
- Consider the following audit log to see the updation changes on the user table. This operation will be done by trigger.
```sql
CREATE TABLE audit_log (
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    old_username VARCHAR(50),
    old_email VARCHAR(100),
    new_username VARCHAR(50),
    new_email VARCHAR(100),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```
- Creating Trigger:
```sql
CREATE TRIGGER after_user_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (user_id, old_username, old_email, new_username, new_email)
    VALUES (OLD.id, OLD.username, OLD.email, NEW.username, NEW.email);
END;

```

- OLD: Refers to the row values before the update.
- NEW: Refers to the row values after the update.

- If we want to automatically update a last_modified timestamp whenever a record in a table is updated, we can use a BEFORE UPDATE trigger
```sql
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100),
    quantity INT,
    last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

```
- Trigger:
```sql
CREATE TRIGGER before_order_update
BEFORE UPDATE ON orders
FOR EACH ROW
BEGIN
    SET NEW.last_modified = CURRENT_TIMESTAMP;
END;

```

### Managing Triggers:
#### Listing Triggers:
- To see all triggers in the database:
```sql
  SHOW TRIGGERS;
```
#### Drop a Trigger:
- To remove a trigger:
```sql
DROP TRIGGER IF EXISTS trigger_name;

```

## Mongo DB
### Indexing:
- Indexing in MongoDB is a powerful feature that improves the performance of database queries. 
- Indexes are special data structures that store a small portion of the collection’s data in an easy-to-traverse form, allowing MongoDB to quickly locate the documents that match the query criteria.
#### Default `_id` Index:
- Every MongoDB collection has a default index on the _id field. This index ensures that each document can be quickly located by its unique identifier.

#### Single Field Index:
-  This is the most basic type of index. It speeds up queries that search based on one specific field.
- Suppose we have a collection called users with documents like this
```json
{ "name": "Alice", "age": 30, "email": "alice@example.com" }

```
- If we often search for users by their name, we can create an index on the name field.
```js
  db.users.createIndex({ name: 1 })
```
- The 1 means the index is sorted in ascending order (alphabetically). If we wanted it in descending order (Z to A), we would use -1.

#### Compound Index:
- This index covers queries that involve multiple fields. 
- Searching users by both name and age could be,
```js
db.users.createIndex({ name: 1, age: -1 })

```

#### Multikey Index:
- This index is used for fields that contain arrays. It allows MongoDB to index each element in the array.
- If each user has a list of hobbies stored in an array, like this
```json
{ "name": "Bob", "hobbies": ["reading", "gaming", "hiking"] }

```
```js
db.users.createIndex({ hobbies: 1 })

```

#### Text Index:
-  This index is used for full-text search, which is searching for keywords within text fields.
- If we have documents with a description field and we want to search for specific words within that field.
```js
db.items.createIndex({ description: "text" })

```

#### Hashed Index:
- This index is useful for evenly distributing data across a sharded cluster.
- It hashes the indexed field's value, making searches faster for equality queries.
- If you have an email field and want to create a hashed index
```js
db.users.createIndex({ email: "hashed" })

```
- This helps MongoDB quickly find users with a specific email address.

#### Geospatial Index:
- This index is used for queries involving locations, such as finding points within a certain distance from a given location.
- Example: If you store the location of users as coordinates:
```json
{ "name": "Charlie", "location": { "type": "Point", "coordinates": [40.7128, -74.0060] } }

```
```js
db.users.createIndex({ location: "2dsphere" })

```
#### Checking Existence of Indexes:
```js
db.users.getIndexes()

```

#### Removing an index:
```js
db.users.dropIndex({ name: 1 })

```

### Triggers in Mongo db Atlas:
- In MongoDB Atlas, triggers are a feature that allows you to execute server-side logic in response to specific events occurring in your database.
- This can be very useful for automating tasks, performing calculations, or synchronizing data between different systems.

#### Types of Triggers:
- Database Triggers:
  - These triggers respond to changes in the database. You can configure them to run automatically when certain events occur, such as inserts, updates, or deletes on a specified collection.
- Scheduled Triggers:
  - Scheduled triggers run at specified intervals, allowing you to perform periodic tasks like cleaning up data, sending reminders, or generating reports.

#### Creating Trigger:
- Click on “Create Trigger”
- Define Trigger Settings
- Set the Function

#### Example Function:
```js
exports = function(changeEvent) {
  const docId = changeEvent.documentKey._id; // Get the ID of the changed document
  const fullDocument = changeEvent.fullDocument; // Get the entire document after the change

  // Perform some action, e.g., logging the change
  console.log(`Document with ID ${docId} was changed. New data:`, fullDocument);

  // You can add more logic here, like sending notifications or updating another collection
};

```
### MongoDB hooks:
- Hooks are methods that allow you to execute custom logic at specific points in the lifecycle of a document or model operation.

#### Types of Hooks:
- Pre Hooks
- Post Hooks

#### Mongoose model with hooks
- `User` model
```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

// Pre-save hook
userSchema.pre('save', function (next) {
    // Custom logic before saving
    if (this.age < 0) {
        const err = new Error('Age cannot be negative');
        return next(err); // Stop saving if validation fails
    }
    next(); // Proceed with saving
});

// Post-save hook
userSchema.post('save', function (doc) {
    console.log(`User ${doc.name} was created with email ${doc.email}`);
});

// Create the model
const User = mongoose.model('User', userSchema);

```

#### Using the model:
```js
async function createUser() {
    const user = new User({ name: 'Alice', email: 'alice@example.com', age: 25 });

    try {
        await user.save(); // This triggers the pre and post hooks
    } catch (err) {
        console.error(err.message); // Handle any validation errors
    }
}

createUser();

```

## mySQL injection:
- MySQL injection is a code injection technique that attackers use to exploit vulnerabilities in an application by inserting malicious SQL code into a query. 
### Example of SQL injection:
- Imagine a web application that allows users to log in by entering their username and password. 
```sql
SELECT * FROM users WHERE username = 'user_input' AND password = 'password_input';
```
- input username:
```sql
' OR '1'='1
```
- input password:
```sql
anything
```
- Resulting query:
```sql
SELECT * FROM users WHERE username = '' OR '1'='1' AND password = 'anything';

```
### Prevention:
- Use prepared statements ensure that user input is treated as data, not executable code.
```js
const username = 'user_input';
const password = 'password_input';

const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
```
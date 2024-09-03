# Milestone 3 of Node JS
## Express Configuration
- Express configuration involves setting up an Express.js application to handle various tasks such as routing, middleware management, view rendering, error handling, and more.
### Setting Up the Express application:
- To install Express the following command have to be run `npm install express`.
- Basic initialization can be done by creating an instance of the express app.
```js
const express = require('express');
const app = express();
```
- Environment Configuration: The port of the system can be set using environment variables.
```js
const PORT = process.env.PORT || 3000;

```
### Middleware Configuration:
- Middleware functions are function that have access to the requext object, the response object and the next middleware function in the system's request-response cycle.
#### Build-in Middleware:
- Express provides built-in middleware like express.json() and express.urlencoded() to handle JSON and URL-encoded data.
```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

```
#### Third-Party Middleware:
- Third-party middleware like morgan can be used for logging or cors for enabling cross-origin requests.
```js
const morgan = require('morgan');
app.use(morgan('dev'));

```
#### Custom Middleware:
- Custome middleware function can also be created to perform specific tasks, such as logging or authentication.
```js
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

```
### Routing Configuration:
#### Basic Routing:
- Express allows you to define routes to handle different HTTP methods (GET, POST, PUT, DELETE, etc.).
```js
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

```
#### Route parameters:
- Dynamic routes can be defined with the help of parameter.
```js
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
```
#### Route Grouping: 
- Using `express.Router()`, you can create modular route handlers for different parts of your application.
```js
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('User List');
});

app.use('/users', userRouter);

```
### Error Handling:
- Custom Error Handlers: Express allows you to define custom error-handling middleware.
- This middleware must have four arguments: err, req, res, and next.
```js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

```
### Serving Static files:
- Static files are files that are sent to the client "as-is" without any processing by the server.
- Examples include images, CSS files, JavaScript files, and other assets.
- Express can serve these files from a specific directory using the express.static middleware.
- Suppose we have a folder named public that contains static files (like images, CSS, etc.). Here’s how we can set it up:
```js
app.use(express.static('public'));

```
### Listening to Incomming Requests:
- Express can be used to listen on a specified port.
```js
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

```

## Helmet:
- Helmet is a middleware in Node.js, specifically designed to enhance the security of your Express-based applications.
- It helps secure your app by setting various HTTP headers that can protect against some common web vulnerabilities.

### Features of Helmet:
- Hides X-Powered-By Header:By default, Express adds an `X-Powered-By: Express` header, which reveals the technology stack of your app.
- Sets Strict-Transport-Security Header: This header ensures that your site is accessed only over HTTPS, protecting against man-in-the-middle attacks.
- Prevents Clickjacking: Helmet sets the X-Frame-Options header, which prevents your site from being embedded into a frame or iframe, a common method used in clickjacking attacks.
- Cross-Site Scripting (XSS) Protection: The X-XSS-Protection header is set by Helmet to enable the XSS filter built into most web browsers, reducing the risk of XSS attacks.
- Content Security Policy (CSP): Helmet can help you define a CSP, which controls which resources the user agent is allowed to load. This protects against various types of attacks, such as cross-site scripting.
- Referrer Policy: Helmet allows you to control the information sent along with requests made to external sites via the Referrer-Policy header.

### Using Helmet in Express app:
```js
const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```
### Customizing Helmet:
- Helmet comes with several smaller middleware functions that you can use individually or customize.
```js
app.use(
  helmet({
    contentSecurityPolicy: false, 
    frameguard: { action: 'deny' },
  })
);

```
## CORS:
- CORS is an acronym for Cross-Origin Resource Sharing.
- It is a security feature implemented by web browsers to control how resources from different origins can be shared.
- It’s a mechanism that allows your server to indicate to a browser that it should permit web applications running at one origin (domain) to access selected resources from a different origin.
- To enable CORS in a Node.js application, you can use the cors middleware package with Express.
```js
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is a CORS-enabled route!' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


```
### Configuring CORS:
```js
const corsOptions = {
  origin: 'http://localhost:3000', // Only allow requests from this origin
  methods: 'GET,POST', // Only allow GET and POST requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers)
};

app.use(cors(corsOptions));

```

## REST API:
- REST (Representational State Transfer) is an architectural style for designing networked applications.
- A RESTful API is an API that adheres to the principles of REST, making it easy to interact with and understand.

### Principles of REST:
- Client-Server Architecture: The client and server are separate entities that communicate via a stateless protocol.
- Statelessness: The server does not store any client state between requests.
- Cacheability: Responses must define whether they are cacheable or not to improve performance.
- Layered System: The architecture can be composed of multiple layers, such as load balancers, proxies, and gateways.

## GET POST PUT DELETE methods in REST:

### GET method:
- The GET method is used to retrieve data from the server.It’s a read-only operation (does not modify any data).Typically used to fetch data from a server.
```js
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});
```
### POST method:
- Creates new resources on the server.
- Can also submit data to perform some operations on the backend server.
```js
app.post('/users', function(req, res){
    //callback function
})
```

### PUT method:
- It updates the database with an entirely new entry or replaces the previous resource with a new one.
```js
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.json({ id: userId, ...updatedUser });
});

```
### DELETE method:
- The DELETE method is used to delete a resource from the server.
- It deletes the specified resource.
```js
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete the user with the given ID from the database
  res.status(204).send(); // No Content
});

```

## Get with params , query params:
- In a RESTful API built with Node.js and Express, you can handle GET requests that include both route parameters and query parameters.

### Route parameter:
- Route parameters are used to capture values specified in the URL path. - They are defined by placing a colon (:) before the parameter name in the route path.
```js
const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ message: `Fetching details for user with ID: ${userId}` });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

### Query Parameters:
- Query parameters are used to pass optional parameters in the URL after the ? symbol.
- They are typically used for filtering, sorting, or paginating results.
```js
const express = require('express');
const app = express();

// GET users with optional query parameters (e.g., for filtering)
app.get('/users', (req, res) => {
  const name = req.query.name; 
  const age = req.query.age;

  // other operations
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

## Express Validator:
- Express Validator is a popular library used in Node.js applications to validate and sanitize user input.
- It helps ensure that the data your application processes meets certain criteria, which is crucial for security and data integrity.

### Example:
- Consider this user controller which gets user details:
```js
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const { email, username, password, phoneNumber, address ,role } = req.body;
    const user = await userService.createUser(email, username, password, phoneNumber, address ,role);
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};

```
- The validation can be applied to each fields as follows:
```js
const { body, validationResult } = require('express-validator');

const validateUser = [
  body('email').isEmail().withMessage('Invalid email address'),
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('phoneNumber').optional().isMobilePhone().withMessage('Invalid phone number'),
  body('address').optional().isLength({ max: 255 }).withMessage('Address can be up to 255 characters long'),
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUser,
  handleValidationErrors
};

```
## Nodemon:
- Nodemon is a utility that helps in the development of Node.js applications by automatically restarting the server when file changes in the directory are detected.
- It's especially useful during development as it saves time by eliminating the need to manually stop and start the server every time you make a change to your code.
### Features of nodemon:
- Automatic Restarts: Restarts your Node.js server automatically when a file changes.
- File Watching: Monitors your files for changes and triggers a restart.
- Ease of Use: Integrates seamlessly with existing Node.js workflows.

- Once the nodemon is installed , we can use `nodemon` to start the application instead of `node`.

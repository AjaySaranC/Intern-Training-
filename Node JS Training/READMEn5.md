# Milstone 5 of Node JS
## cURL:
- cURL stands for Client URL.
- cURL lets us to exchange data between your device and a server through a command-line interface (CLI).
- cURL enables diverse request forms, much like API tools like Postman and Insomnia, but directly from our terminal.
- It is a command line tool that enables data exchange between a device and a server through a terminal.
- The cURL command uses the libcURL client-side URL transfer library. 
- This library supports many different transfer protocols, including HTTPS, SMTP, and FTP.

### Syntax:
```bash
cURL [options] [URL]
```
- options: Customize the behaviors of request.
- URL: The URL or location specified tells the cURL command where we want to access data from or send data.
- Methods: cURL supports various HTTP methods, such as GET, POST, PUT, DELETE.

### cURL Commands:
#### GET Method:
```bash
cURL http://localhost:3000/api/restaurants
```
- Using Authorization:
```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJhZG1pbnVzZXIiLCJpYXQiOjE3MjQ3MzY0MzcsImV4cCI6MTcyNDc0MDAzN30.VIEAqIOSOT8_PL4xVdoT5iL8XHmeSIhC-r1QXSSvDa8" http://localhost:3000/api/users
```
#### POST method:
- Used to send data to a server,typically to create or update a resource.
##### application/x-www-form-URLencoded:
- If we do not specify the format we want, cURL uses application/x-www-form-urlencoded by default.
```bash
cURL -X POST -d "name=cURL&type=article" https://jsonplaceholder.typicode.com/posts
```
##### application/JSON:
- With cURL, you can also send a stringified JSON object like this:
```bash
curl -X POST http://localhost:3000/api/login/ -H "Content-Type: application/json" -d "{\"username\":\"ajay\", \"password\":\"ajay@123\"}"
```



#### Adding Headers:
```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJhZG1pbnVzZXIiLCJpYXQiOjE3MjQ3MzY0MzcsImV4cCI6MTcyNDc0MDAzN30.VIEAqIOSOT8_PL4xVdoT5iL8XHmeSIhC-r1QXSSvDa8" http://localhost:3000/api/users
```

#### Deleting Resources on a server:
```bash
cURL -X DELETE https://jsonplaceholder.typicode.com/posts/1
```

#### PUT:
```bash
cURL -X PUT -d '{"name": "json", "type": "post"}' -H "Content-Type: application/json" https://jsonplaceholder.typicode.com/posts/1
```

### cURL Protocols and Formats:
#### FTP:
- The File Transfer Protocol (FTP) transfers files from a server to a client. 
```bash
cURL -T [selected-file] "ftp://[target-destination]"
```

#### SMTP:
```bash
cURL smtp://[smtp-sever] --mail-from [sender] --mail-rcpt \ [receiver] --upload-file [mail-content-file]
```

#### HTTPS:
```bash
cURL https://www.example.com
```

#### DICT:
- The Dictionary Network Protocol (DICT) provides access to dictionaries.
```bash
cURL "dict://dict.org/d:hello"
```
### Modes:
#### Verbose mode:
- Used to see detailed information about the request and response.
```bash
curl -v https://api.example.com/resource
```
#### Response header:
- Include response headers in output.
```bash
curl -i http://localhost:3000/api/restaurants
``` 

#### Write output file:
```bash
curl -o restaurant.json http://localhost:3000/api/restau
rants
```

## GraphQL
- GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. 
- It was developed by Facebook in 2012 and released as an open-source project in 2015.
- A GraphQL service is created by defining types and fields on those types, then providing functions for each field on each type.

### Schema:
- The schema defines the types of data and the operations (queries and mutations) available.

```js
type User {
  id: ID!
  username: String!
  email: String
}

type Query {
  users: [User]
  user(id: ID!): User
}

```

### Types:
- GraphQL supports scalar types (e.g., String, Int, Float, Boolean, ID) and custom object types.
- Enums, enumeration types are a special kind of scalar that is restricted to a particular set of allowed values.Validate that any arguments of this type are one of the allowed values.Communicate through the type system that a field will always be one of a finite set of values.

### Queries:
- Queries are used to fetch data.
```js
{
  users {
    id
    username
    email
  }
}
```

### Mutations:
- Mutations are used to modify data (create, update, delete).
```js
mutation {
  createUser(username: "ajay", email: "ajay@example.com") {
    id
    username
  }
}
```

### Resolvers:
- Resolvers are functions that handle the fetching of data for a specific field in your schema.
```js
const resolvers = {
  Query: {
    users: () => {
      return getUsersFromDatabase();
    }
  }
};

``` 

### Example with array to store values
```js
const { ApolloServer, gql } = require('apollo-server');

// Define the schema
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User  
  }

  type Mutation {
    createuser(username: String!,email: String!): User
  }

`;

// Sample data
const users = [
  { id: "1", username: "ajay", email: "ajay@example.com" },
  { id: "2", username: "john", email: "john@example.com" }
];

// Define the resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => users.find(user => user.id === id), 
  },

  Mutation: {
    createuser: (parent,{ username,email }) => {
        const newuser = { id:`${users.length + 1}`, username, email};
        users.push(newuser);
        return newuser;
    }
  }
};

// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

```
### Example using mySQL db:
```js
const { ApolloServer, gql } = require('apollo-server');
const { Sequelize, DataTypes } = require('sequelize');

// Create a new instance of Sequelize connected to your MySQL database
const sequelize = new Sequelize('gqlinfo', 'root', 'saranajay', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Define a sample model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
});

// Sync the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error creating database & tables:', err);
  });

// Define the schema
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User  
  }

  type Mutation {
    createuser(username: String!, email: String!): User
  }
`;

// Define the resolvers
const resolvers = {
  Query: {
    users: async () => {
      return await User.findAll(); // Fetch all users from the database
    },
    user: async (parent, { id }) => {
      return await User.findByPk(id); // Fetch a user by primary key (id)
    },
  },

  Mutation: {
    createuser: async (parent, { username, email }) => {
      const newUser = await User.create({ username, email }); // Create a new user in the database
      return newUser;
    }
  }
};

// Create an Apollo server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

```

## Redis:
- Stands for Remote Dictionary Server.
- It is an open-source, in-memory data structure store that can be used as a database, cache, and message broker.
- Redis is a database that gets stored on the random access memory (RAM).
- Redis is persistent, meaning that even if your system is off, you won't lose data.
- Redis is better than mySQL and other no SQL databases in terms of speed.
- It's a simple way to store data where each piece of information has a key and a value.
 ### Redis Commands

 #### Key operations:
 - `SET` : Saves a piece of data.
 - `GET` : Gets a piece of data.
 - `DEL` : Removes data.
 - `EXISTS` : Checks if data exists.
 - `EXPIRE` : Makes data disappear after some time.
 #### String Operations:
- `SET/GET` - Saves/Gets text.
- `INCR` - Adds numbers.
- `APPEND` - Adds more text.
#### List Operations:
- `LPUSH/RPUSH` - Adds an item to the start/end of a list.
- `LPOP/RPOP` - Removes an item from the start/end.
- `LRANGE` - Gets a part of the list.
#### Set Operations:
- `SADD` - Adds items to a group.
- `SREM` - Takes items out.
- `SMEMBERS` - Shows all items in the group.
#### Hash Operations:
- `HSET/HGET` - Saves/Gets data in a group.
- `HGETALL` - Shows all data in a group.

### Redis Feautures:
- Transaction: lets to do bunch of tasks together
- Pub/Sub Messaging: Sends messages across channels
- Lua Scripting: Runs scripts for complex tasks.
- Access control: Keeps things secure by controlling access.
- Streams: Keeps a record of messages or tasks.
- Modules: Adds new features.

### Usecases:
- Caching - Makes apps faster by remembering stuff.
- Session Store - Keeps track of user sessions across devices.
- Real-time Analytics - Helps see data as it happens.
- Message Queuing - Manages messages between processes.
- Rate Limiting - Helps control how much users can do.

## Memcached:
- Memcached is a powerful tool used in system design to speed up web applications by storing data in memory. 
- It works as a caching layer, reducing the time needed to access frequently requested information.

### Key feautures:
- In-Memory Storage: Memcached stores data in RAM, which allows for very fast read and write operations compared to traditional databases.
- Key-Value Store: It uses a simple key-value store mechanism where data is stored as a value associated with a unique key. This allows for quick retrieval of cached data.
- Distributed System: Memcached can run on multiple servers, distributing the load and enabling it to scale horizontally.
- Cache Expiration: Items in Memcached can have expiration times set, allowing for automatic removal of stale data after a defined period.
- No Data Persistence: Memcached is not designed for data persistence. If the server restarts or if there is a failure, all stored data is lost. 

### Use cases:
- Database Query Caching: Memcached is often used to cache the results of expensive database queries.
- Session Storage: It can be used to store session data for web applications, allowing for faster access.
- Page Caching: Memcached can cache rendered HTML pages or parts of pages, which can significantly improve load times for users.
- Object Caching: It can cache objects or data structures to reduce the need to repeatedly compute or fetch them from slower storage.

### Difference from Redis:
- Unlike Redis, Memcached has no data types, as it stores strings indexed by a string key.
- When compared to Redis, it uses less overhead memory.
- Also, it is limited by the amount of memory of its machine and, if full, it will start to purge values on a least recently used order. 

## Docker:
- Docker is an open platform for developing, shipping, and running applications.
- Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
- With Docker, you can manage your infrastructure in the same ways you manage your applications.
- Docker provides the ability to package and run an application in a loosely isolated environment called a container.
- The isolation and security lets you run many containers simultaneously on a given host.

### Architecture of Docker:
#### Docker daemon:
- The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes.
#### Docker client:
- The Docker client (docker) is the primary way that many Docker users interact with Docker.
- When you use commands such as docker run, the client sends these commands to dockerd, which carries them out.
#### Docker Desktop:
- Docker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. 
#### Docker registries or Docker Hub:
- A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker looks for images on Docker Hub by default.

#### Docker objects:
##### Images:
- An image is a read-only template with instructions for creating a Docker container. Often, an image is based on another image, with some additional customization. 
##### Containers:
- A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. 

### Dockerfile:
- A Dockerfile is a script that contains a series of instructions on how to build a Docker image. It specifies the base image, environment variables, commands to run, and more.

### Volumes:
- Volumes are a way to persist data generated by and used by Docker containers. They allow data to be stored and retrieved even if the container is deleted.

### Docker commands:
#### pull an image:
```bash
docker pull python
```
#### run a container
```bash
docker run -it python
```
#### List all running containers
```bash
docker ps
```
#### List all containers including stopped ones
```bash
docker ps -a

```
#### Remove container
```bash
docker rm <container_id>

```
#### Remove an image
```bash
docker rmi <image_name>

```
#### Build container
```bash
docker build -t <image_name> <path_to_dockerfile>
```

### Dockerfile for hosted sample program
```bash
# Use an official Python runtime as a parent image
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Run app.py when the container launches
CMD ["python", "app.py"]

```
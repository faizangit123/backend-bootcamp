# Backend from start in depth 🚀

I'm starting backend in details from the very start and here you can see the structured journey to learn backend development from scratch using Node.js, Express.js, MongoDB, and REST APIs with daily practice and projects.

---

# 📅 Progress

## ✅ Day 1 - Initialize Node.js Project

### What I Did

- Learned the basics of backend development and Node.js.
- Initialized my first Node.js project.
- Understood the purpose of `package.json` and `package-lock.json`.
- Installed and used my first npm package: **cat-me**.
- Learned how Node.js executes JavaScript outside the browser.
- Ran my first Node.js application successfully.

### Skills Learned

- Node.js Basics
- npm
- package.json
- package-lock.json
- Installing npm packages

---

## ✅ Day 2 Part 1 - Express.js Basics

### What I Did

- Installed and set up Express.js.
- Created my first Express application.
- Created an Express app instance.
- Started a server using `app.listen()`.
- Created multiple **GET** routes (`/`, `/home`, `/contact`).
- Learned how the server handles requests and sends responses.
- Used **npx nodemon** to automatically restart the server whenever changes were made.

### Skills Learned

- Express.js
- Express Application
- Server Creation
- Routing
- GET Requests
- Request & Response
- Nodemon
---

## ✅ Day 2 - Part 2: API & Middleware

### What I Did

- Learned what an **API** is and how it enables communication between applications.
- Understood the concept of a **REST API** and its principles.
- Learned about common HTTP methods:
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
- Built a simple REST API using **GET** and **POST** requests.
- Tested API endpoints using **Postman**.
- Learned how to send data in the **Body** of a request using the **JSON** format.
- Discovered why `req.body` returns `undefined` by default.
- Added the Express middleware `app.use(express.json())` to parse incoming JSON data.
- Successfully received and processed JSON data from Postman after adding the middleware.

### Skills Learned

- API Fundamentals
- Rest API
- HTTP Methods
- GET Request
- POST Request
- Postman
- Request Body
- JSON
- Express Middleware
- `express.json()`
- `req.body`

----

## ✅ Day 2 - Part 3 : Small task creating a notes Application :-> Building a Simple CRUD API
###  What I Learned

Today I combined the concepts I learned earlier and built a simple CRUD API using Express.js.

###  What I Built

- Created a dedicated `src` folder to organize the project.
- Separated the application logic and server startup into different files.
- Configured the Express server.
- Used `express.json()` middleware to handle incoming JSON data.
- Created an in-memory `posts` array to store data.
- Implemented API routes for:
  - **POST** – Create a new post.
  - **GET** – View all posts.
  - **PATCH** – Update the description of a specific post.
  - **DELETE** – Remove a post using route parameters.
- Learned the difference between:
  - `req.body` (receiving request data)
  - `req.params` (receiving values from the URL)

### 💡 Key Takeaways : That i get to know

- **Folder structure does matters.** As projects grow, organizing files into folders makes the code easier to understand, maintain, and scale.
- Writing code once isn't enough to truly understand it. Before moving on to a new topic, I rewrite everything I've learned from scratch without looking at previous code. This helps me identify gaps in my understanding and reinforces the concepts.
- I realized that using JavaScript's `delete` operator on an array doesn't completely remove the element. Instead, it leaves an empty slot (`undefined`) while keeping the array length the same. This helped me better understand how arrays work internally.

### 🚀 Skills Learned

- Project Structure
- Express Configuration
- CRUD Operations
- GET Requests
- POST Requests
- PATCH Requests
- DELETE Requests
- Route Parameters
- `req.params`

---
## ✅ Day 3 - CRUD API, HTTP Status Codes & MongoDB Basics

###  What I Did
Today I rebuilt my Notes CRUD API from scratch again, but this time I focused on writing cleaner APIs and understanding how data is actually stored.
> **Note:** I originally divided Day 3 into multiple parts while learning. After completing everything, I summarized it into a single README since all the concepts are connected.

## 📚 What I Built
- Rebuilt my Notes CRUD API from scratch.
- Added proper HTTP Status Codes.
- Connected the API to **MongoDB Atlas** using **Mongoose**.
- Created a dedicated database configuration.
- Created my first **Schema** and **Model**.
- Started storing notes in MongoDB instead of an in-memory array.
- Organized the project into a cleaner folder structure.

###  What I Learned
#### HTTP Status Codes
I learned how different status codes are used to describe the result of an API request.
- **200 OK** – The request was successful.
- **201 Created** – A new resource was created successfully.
- **204 No Content** – The request was successful, but no response body is returned.
One interesting thing I noticed was that **204 No Content** doesn't display any data in Postman because the server intentionally sends back an empty response.

---
#### Why My Notes Disappeared
While testing my Notes API, I noticed that every time I restarted the server, all my notes were gone.
At first, I thought something was wrong with my CRUD operations.
Then I realized that the `posts` array was only stored in the application's memory (RAM). When the Node.js server stops, everything stored in memory is cleared. When the server starts again, it creates a new empty array.
This helped me understand why backend applications need a database.

---
#### Introduction to Databases
I learned that databases allow applications to store data permanently, so it remains available even after the server restarts.
I also learned about the two main types of databases:
- **Relational Databases (SQL)**
- **Non-Relational Databases (NoSQL)**
For my backend journey, I'm starting with **MongoDB**.

---
#### Understanding with a Real-World Example
A simple example that helped me understand databases was **Spotify**.
As a normal user, I can:
- Listen to songs.
- Like music.
- Create playlists.
But I cannot upload songs or modify Spotify's database.
Only artists and authorized systems can create or update that data.
This helped me understand that applications control who can read, create, update, and delete data from the database.

### 💡 My Biggest Takeaway
One habit I've started following is rewriting all the previous day's code from scratch before learning something new.
Instead of copying old code, I rebuild everything on my own. Sometimes I forget things or make mistakes, but that's exactly what helps me understand the concepts more deeply.
- Rewriting previous code from scratch before learning something new helps me understand concepts much more deeply.
- I also started writing my own notes, which has made it easier to remember and understand backend concepts.
Every bug and every mistake teaches me something new.

---
### MongoDB & Mongoose
- A MongoDB **Cluster** can contain multiple databases.
- Adding `/day-3` to the connection URI tells MongoDB which database to use. If it doesn't exist, MongoDB creates it automatically when data is inserted.
- Database connections are asynchronous, so `.then()` and `.catch()` are used to handle successful or failed connections.
- A **Schema** defines the structure of the data stored in the database.
- Mongoose automatically creates a unique `_id` for every document.
- Properties not defined in the schema are ignored.
- `.find()` always returns an array, even if only one document exists.

---
### Why My Data Disappeared
One thing that confused me was why all my notes disappeared after restarting the server.
I realized that my `posts` array was only stored in the application's memory (RAM). Once the server stopped, that data was lost. This helped me understand why databases are essential for storing data permanently.

---
## 🚀 Skills Learned
- CRUD API
- HTTP Status Codes
- MongoDB Atlas
- MongoDB Compass
- Mongoose
- Schema & Models
- Database Connection
- Async/Await
- Environment Variables (`.env`)
- dotenv
- Project Structure

---

## ✅ Day 4 - MongoDB, Mongoose & Frontend Integration
### Thing that i learn :
Today was one of the most exciting days so far because my application finally started storing **real data** instead of temporary data stored in memory.
Until now, every time I restarted the server, all my notes disappeared because they were stored inside a JavaScript array.
Today I learned how databases solve that problem.

---
### What I Built
- Connected my backend with **MongoDB Atlas**.
- Learned how to use **Mongoose** to communicate with MongoDB.
- Created my first **Schema** for Notes.
- Created a **Model** from the schema to perform CRUD operations.
- Replaced the temporary JavaScript array with a real MongoDB database.
- Implemented CRUD operations using Mongoose:
  - **Create** a note
  - **Read** all notes
  - **Update** a note
  - **Delete** a note
- Tested every API successfully using **Postman**.
- Verified that all operations were working correctly in **MongoDB Compass**.

---
### Frontend Integration

After completing the backend, I connected it with my React application.
I learned:
- How React communicates with backend APIs.
- Why **Axios** is commonly used to make HTTP requests.
- Fetching notes from the backend using `axios.get()`.
- Displaying database data dynamically using React state.
- Using `useEffect()` to load data when the application starts.
Seeing the data appear on the frontend directly from MongoDB made everything feel much more connected.

---
###  My Key Takeaways
- A **Schema** defines the structure of documents stored in MongoDB.
- A **Model** is what allows us to perform CRUD operations on a collection.
- MongoDB automatically creates a unique `_id` for every document.
- Backend and frontend become much more powerful once they communicate through APIs.
- Postman is great for testing APIs, but seeing the same data appear inside a React application feels much more rewarding.

---

### Something I Realized
One thing I'm enjoying about this journey is that every new topic builds on the previous one.
A few days ago, I was storing notes in an array.
Then I learned why that wasn't enough.
Now those same notes are stored inside a real database, tested with Postman, viewed in MongoDB Compass, and displayed inside my React application.
Watching all these pieces connect together is making backend development much easier to understand.

---
### 🚀 Skills Learned
- MongoDB Atlas
- MongoDB Compass
- Mongoose
- Schema
- Model
- CRUD Operations
- API Integration
- Axios
- React
- useEffect
- State Management
- Backend & Frontend Communication

## ✅ Day 5 - Building a Full-Stack Notes Application

### What I have Learned:
Today I combined React, Express, and MongoDB to build my first complete CRUD Notes application.

### What I Make this time:
- Created REST APIs for Notes.
- Connected a React frontend to an Express backend using Axios.
- Stored notes in MongoDB.
- Implemented CRUD operations:
  - Create
  - Read
  - Update
  - Delete
- Updated the UI automatically after creating or deleting notes.
- Organized the backend into separate folders for better project structure.
- Used Express middleware for JSON parsing, CORS, and serving static files.
- Served the React production build from the Express backend.

### My own Key Takeaways:
- A good folder structure makes projects easier to understand, maintain, and scale.
- React applications can be converted into static assets using `npm run build`.
- Those build files can be served directly by Express through the `public` folder, allowing the frontend and backend to be deployed together.
- APIs act as the bridge between the frontend and backend.
- Route parameters (`req.params`) are useful for updating or deleting specific resources.

### How was my Learning Approach:
One habit I've developed is rewriting everything from scratch before moving on to a new topic.
Instead of copying previous code, I rebuild everything I've learned so far using different data and examples. If I get stuck, I go back, understand the concept more deeply, and try again.
This approach takes longer, but it helps me truly understand how everything works rather than just memorizing the syntax.

### 🚀 Skills Learned
- Express.js
- React
- MongoDB
- Mongoose
- CRUD Operations
- REST APIs
- Axios
- Express Middleware
- Static File Serving
- Project Structure
- Route Parameters

---

## ✅ Day 6 - Understanding Authentication Fundamentals

### What I have Learned:
Today I learned the core concepts behind Authentication and how servers identify users securely.

### What I Make this time:
- Learned how `express.static("./public")` makes all files inside the `public` folder publicly accessible.
- Understood the four main pillars of an Authentication System:
  - Authentication
  - Authorization
  - Validation
  - Verification
- Learned how a user registers by sending data through `req.body`.
- Understood that the server stores user data in the database and generates a token.
- Learned that every future request should include that token so the server can identify the user.
- Understood why JWT uses a secret key (`JWT_SECRET`) to securely sign tokens.

### My own Key Takeaways:
- Authentication identifies **who** is sending the request.
- Authorization decides **what** a user is allowed to access.
- Validation checks whether the input format is correct.
- Verification confirms that the provided information belongs to the correct user.
- A token works like a digital ID card that helps the server recognize users.
- `JWT_SECRET` is stored only on the server and prevents forged or modified tokens.

### How was my Learning Approach:
Instead of memorizing definitions, I tried understanding each concept through real-world examples like Instagram, Spotify, and a college permission system. Relating technical concepts to everyday situations made them much easier to understand.

---

## ✅ Day 7 - Authentication: Register API & JWT
### What I did :
Well for today I started implementing the authentication concepts I learned previously by building my first Register API.
Before writing any new code, I rewrote everything I had learned so far from scratch—including the CRUD APIs, database configuration, models, environment variables, and server setup. Rebuilding previous topics helps me understand the concepts more deeply instead of simply remembering the code.
### The thing i write : 
- Recreated the complete Notes CRUD backend from scratch.
- Organized the project by moving authentication APIs into a separate `auth.routes.js` file.
- Used `express.Router()` to keep the application modular and easier to maintain.
- Built the **Register API**.
- Saved user information in MongoDB.
- Checked whether an email already exists before creating a new account.
- Generated a JWT token after successful registration.
- Stored the JWT inside a cookie.
### what my Takeaway is : 
well for practice i just rewrite all the backend code again like all the CURD api, config -> database , model -> note.model.js , .env, server.js and now the Authentication system concept that i learn yesterday i understand 4 main pillers and now i am going to appy then with the coding and its now its time to increase the folder structure like register api, for Authentication we are going to make routes and in that we are going to make a file name auth.routes.js, we wrtie all the auth api in auth.routes.js and export them in app.js and we use .Router() if we want to make api other then in app.js for creating ./register api
There is one problem : {"name":"test","email":"test@email.com","password":"testtry"}, when we send again then it will create same user again with same email , so it should say this email already exit, try wtih differnt email ,so we need to modify our schema.

| Status Code         | When to use                                             |   Example                     |
| ------------------------------------------------------------------------------------------------------------- |
| **400 Bad Request** | The client sent an invalid or malformed request.        | Missing fields, invalid JSON, invalid email format. |
| **409 Conflict**    | The request is valid, but conflicts with existing data. | Email already exists, username  already taken.        |

### 🚀 Skills Learned

- Authentication
- Express Router
- Register API
- JWT (jsonwebtoken)
- Cookies
- Cookie Parser
- Duplicate User Validation
- Authentication Flow

---

## ✅ Day 8 - Login API, Cookies & Password Hashing
### What I did :
Today I continued building the authentication system by implementing the Login API and understanding how user authentication works after registration.
Before writing any new code, I rebuilt everything I had learned so far from scratch. Rewriting previous topics helps me understand the concepts instead of memorizing the code.
### The thing i write : 
- Recreated the authentication system from scratch.
- Built the **Login API**.
- Verified whether the user exists using their email.
- Compared the entered password with the hashed password stored in the database.
- Generated a new JWT token after successful login.
- Stored the JWT inside browser cookies.
- Created a Protected Route to inspect cookies sent by the client.
- Added a custom cookie to better understand how the server reads cookies from incoming requests.
### what my Takeaway is : 
- Registration and Login serve different purposes.
  - **Register** creates a new user.
  - **Login** verifies the user and issues a fresh authentication token.
- Cookies allow the browser to automatically send the token with every request.
- Authentication becomes much simpler because the client doesn't need to manually attach the token every time.
- Sensitive information should never be stored inside a JWT token. Only essential information such as the user ID should be included.
- Passwords should never be stored in plain text.
### Understanding Password Hashing :
I also learned why password hashing is one of the most important parts of authentication.
If a database is ever leaked, storing plain-text passwords would expose every user's password immediately.
Instead, passwords are converted into a one-way hash before being stored.
Some important properties of hashing:
- The same input always produces the same hash.
- Hashes cannot be reversed back into the original password.
- During login, the entered password is hashed again and compared with the stored hash.
Today I used the **MD5** hashing algorithm to understand the concept. In the next step, I'll replace it with **bcrypt**, which is the recommended approach for securely storing passwords.

### 🚀 Skills Learned
- Login API
- JWT Authentication
- Cookies
- Cookie Parser
- Password Hashing
- MD5

## 🎯 Goal

Document my backend learning journey step by step while building a strong foundation in Node.js, Express.js, MongoDB, REST APIs, Authentication, and Deployment.

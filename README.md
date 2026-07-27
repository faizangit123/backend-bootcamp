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

## 🎯 Goal

Document my backend learning journey step by step while building a strong foundation in Node.js, Express.js, MongoDB, REST APIs, Authentication, and Deployment.

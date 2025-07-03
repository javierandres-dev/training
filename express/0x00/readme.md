# 0x00

## Express

### Beginner Level: Core Concepts

1. What is Express.js??
- Purpose and advantages
- How it fits into the Node.js ecosystem

2. Setting Up Your Environment
- Installing Node.js and npm
- Creating your first Express app (npm init, npm install express)

3. Basic Server Setup
- app.listen(), app.get(), app.post()
- Sending responses with res.send() and res.json()

4. Routing Basics
- Route parameters and query strings
- HTTP methods: GET, POST, PUT, DELETE

5. Middleware Fundamentals
- What middleware is and how it works
- Writing custom middleware
- Using built-in middleware like express.json() and express.static()

### Intermediate Level: Building Real APIs

6. Handling Requests and Responses
- Parsing body data with body-parser
- Working with headers, status codes, and cookies

7. Modularizing Routes
- Using express.Router()
- Organizing routes in separate files

8. Error Handling
- Custom error middleware
- Handling async errors with try/catch or libraries like express-async-errors

9. Templating Engines (Optional)
- Using EJS, Pug, or Handlebars for server-side rendering

10. Serving Static Files
- Hosting images, CSS, and JavaScript files

### Advanced Level: Production-Ready Apps

11. RESTful API Design
- CRUD operations
- REST principles and best practices

12. Authentication & Authorization
- Sessions and cookies
- JWT (JSON Web Tokens)
- Role-based access control

13. Security Best Practices
- Helmet.js, CORS, rate limiting
- Preventing XSS, CSRF, and injection attacks

14. Database Integration
- MongoDB with Mongoose or SQL with Sequelize
- Connecting, querying, and modeling data

15. Testing Your App
- Unit and integration testing with Jest or Mocha
- Supertest for HTTP assertions

16. Deployment
- Environment variables with dotenv
- Deploying to platforms like Render, Vercel, or Heroku
- Reverse proxy with Nginx

---

### Middlewares

Let's break it down with a simple analogy.

Imagine you're going to a concert.

- You are the request (you want to see the show).
- The main stage where the band plays is your final route handler (the code that sends
  the final webpage or data).

But you can't just walk straight to the stage. You have to go through a few
checkpoints first.

1. Ticket Check: A person at the gate checks if you have a valid ticket.
2. Security Check: Another person checks your bag for forbidden items.
3. ID Check: A third person checks your ID to see if you can enter the bar area.

These checkpoints are your middleware.

In Express.js, middleware is just a function that runs *before* your final route 
handler.

Each middleware function has access to:
- The request (req)
- The response (res)
- A special function called next()

The job of a middleware function is to do one of two things:

1. Do its job and pass the request to the next checkpoint. It does this by calling
  next(). (e.g., "The ticket is valid, go ahead to the security check.").
2. End the request right there. It does this by sending a response. (e.g., "You don't
  have a ticket. You can't come in.").

What is it used for?

You use middleware for all the common jobs you need to do for many different routes:
- Logging: Like our example.
- Authentication: Checking if a user is logged in.
- Parsing Data: Taking incoming data (like JSON) and making it easy to use.
- Setting Headers: Adding special information to the response.

In short: Middleware functions are helpers that process the request in steps before 
your main code runs.

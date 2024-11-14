# Express Server with User Authentication and Zod Validation

This project demonstrates a basic Express server setup, including user authentication and data validation using Zod. This application provides a foundational structure for handling user data securely with JWT-based authentication and MongoDB as the database.

## Project Structure

This project includes the following main files and modules:

- **app.js** - Initializes the Express application and configures global middleware.
- **index.js** - Entry point for starting the server.
- **jwt.js** - Handles JWT token generation and verification for authentication.
- **kidney.js** - Contains routes and functionalities for health assessments, such as checking if a kidney is healthy, assessing replacement needs, and more.
- **middleware_and_globalcath.js** - Sets up global middleware, error handling, and route protection.
- **middleware_checker.js** - Custom middleware functions to validate incoming requests.
- **mongo.js** - Sets up the MongoDB connection.
- **zod.js** - Defines Zod schemas for data validation.
- **package.json** - Lists project dependencies.

## Key Features

- **User Authentication** - User login and registration are protected with JWT for secure sessions.
- **Data Validation** - Input data is validated using Zod, ensuring correct types and structures.
- **MongoDB Integration** - The project includes MongoDB setup for managing user data.
- **Middleware** - Uses middleware for route protection and custom error handling.

## Installation

1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Set up environment variables for MongoDB URI and JWT secret in a `.env` file.
4. Start the server with `node index.js`.

## Dependencies

- **Express** - For server creation and route handling.
- **Zod** - For schema validation.
- **JWT** - For authentication.
- **MongoDB** - For database integration.

## Getting Started

To test the server:

1. Register a user using the `/register` endpoint.
2. Login using `/login` to receive a JWT token.
3. Access protected routes with the JWT token for user authorization.

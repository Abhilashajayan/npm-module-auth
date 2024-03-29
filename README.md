# simple-auth-module

A versatile module for seamless MongoDB database connections, secure user registration/authentication with bcrypt, and JWT token management.

## Features

- **Database Connection:**
  - Establishes a connection to a MongoDB database using the provided connection string.

- **User Registration:**
  - `registerUser(userData: IUser): Promise<IUserModel>`
    - Registers a new user in the authentication system.
    - Parameters:
      - `userData`: An object containing user data with the following properties:
        - `username` (string): The username of the user.
        - `email` (string): The email address of the user.
        - `password` (string): The user's password.

- **User Authentication:**
  - `loginUser(username: string, password: string, secretKey: string): Promise<string | null>`
    - Authenticates a user by checking the provided username and password against stored credentials.
    - Generates and returns a JWT token upon successful authentication.
    - Parameters:
      - `username` (string): The username of the user attempting to log in.
      - `password` (string): The password entered by the user.
      - `secretKey` (string): A secret key used for JWT token generation and verification.

  - `verifyToken(token: string, secretKey: string): { userId: string; username: string; email: string } | null`
    - Verifies a JWT token's validity.
    - Returns the decoded token payload if valid; otherwise, returns `null`.
    - Parameters:
      - `token` (string): The JWT token to be verified.
      - `secretKey` (string): The secret key used for JWT token verification.

## Installation

```bash
npm install simple-auth-modules

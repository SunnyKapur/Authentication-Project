# Notes API

## Steps Implemented

### 1. User Model Created

* Created User schema using Mongoose.
* Added name and email fields.
* Applied required validations.
* Added timestamps.

### 2. User Registration API

* Created register controller.
* Validated name and email fields.
* Registered new user in database.
* Generated JWT token.
* Stored token in cookies.

### 3. Note Creation API

* Created note controller.
* Validated title and description.
* Verified JWT token.
* Created note and associated it with the user.

### 4. Get All Notes API

* Verified JWT token.
* Fetched notes from database.
* Returned notes in response.

### 5. Update Note API

* Validated note ID.
* Validated description length.
* Updated note description.
* Saved updated note.

### 6. Delete Note API

* Validated note ID.
* Deleted note from database.

### 7. Authentication

* Implemented JWT authentication.
* Protected note routes using token verification.
* Stored authenticated user data in request object.

### 8. Error Handling

* Added try-catch blocks.
* Returned appropriate status codes and error messages.

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser

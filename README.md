# CRUD-APP

A simple Node.js CRUD application for managing users.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [CORS](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- npm or yarn package manager.
- A running instance of PostgreSQL.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/crud-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd crud-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root of the project and add your database connection string.

   **Note:** You will need to create a `.env` file with the following variable:
   ```
   DATABASE_URL="postgres://your_database_user:your_database_password@your_database_host:5432/your_database_name"
   PORT=3000
   ```
   The application is configured to connect to a PostgreSQL database with SSL required.

## Usage

To start the server, run the following command:

```sh
npm start
```

The server will start on `http://localhost:3000` by default, or the port specified in your `.env` file.

## API Endpoints

The base URL for all endpoints is `/users`.

| Method | Endpoint          | Description                 |
|--------|-------------------|-----------------------------|
| POST   | `/create`         | Create a new user.          |
| GET    | `/getAll`         | Get all users.              |
| GET    | `getUser/:id`     | Get a single user by ID.    |
| PUT    | `update/:id`      | Update a user by ID.        |
| DELETE | `delete/:id`      | Delete a user by ID.        |

**Request Body for `POST /create` and `PUT /update/:id`:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

## Project Structure
```
CRUD-APP/
├── config/
│   └── db.js           # Database connection and configuration
├── controllers/
│   └── user.controller.js # Request handling logic for users
├── models/
│   └── User.js         # Sequelize model for the User
├── routes/
│   └── user.route.js   # API routes for users
├── .env.example        # Example environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project dependencies and scripts
├── package-lock.json   # Exact versions of dependencies
└── server.js           # Main application entry point
``` 
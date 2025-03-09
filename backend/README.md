# Express and PostgreSQL Backend

This project is a backend application built with Express and PostgreSQL, designed to handle user-related operations. It is structured to facilitate easy development and deployment using Docker.

## Project Structure

```
express-postgres-backend
├── src
│   ├── controllers        # Contains controllers for handling requests
│   │   └── userController.ts
│   ├── models             # Contains models for database interaction
│   │   └── userModel.ts
│   ├── routes             # Contains route definitions
│   │   └── userRoutes.ts
│   ├── app.ts             # Entry point of the application
│   └── database.ts        # Database connection setup
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in Git
├── Dockerfile             # Docker image configuration
├── docker-compose.yml     # Docker Compose configuration
├── package.json           # NPM dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-postgres-backend
   ```

2. Create a `.env` file in the root directory and add your PostgreSQL connection details:
   ```
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   ```

3. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

### Usage

- The application will be available at `http://localhost:3000`.
- You can access user-related endpoints defined in `src/routes/userRoutes.ts`.

### Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

### License

This project is licensed under the MIT License.
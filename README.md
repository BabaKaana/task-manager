# Task Manager

A simple **Task Management REST API** built with **Node.js, Express, and MongoDB**. Designed to handle task creation, tracking, and management with clean backend logic.

## Features

* Full **CRUD operations** for tasks
* Data persistence using **MongoDB**
* Async error handling with middleware
* JSON-based API responses for easy frontend integration

## Tech Stack

* **Node.js** – server-side runtime
* **Express.js** – web framework for routing and APIs
* **MongoDB (Mongoose)** – database and object modeling
* **dotenv** – environment variable management

## API Endpoints

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/v1/tasks`     | Retrieve all tasks           |
| POST   | `/api/v1/tasks`     | Create a new task            |
| GET    | `/api/v1/tasks/:id` | Retrieve a single task by ID |
| PATCH  | `/api/v1/tasks/:id` | Update a task by ID          |
| DELETE | `/api/v1/tasks/:id` | Delete a task by ID          |

## Example Task JSON

```json
{
  "name": "Finish Node project",
  "completed": false
}
```
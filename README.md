# Todo List React Application

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Features](#features)
4. [Technologies](#technologies)
5. [Testing](#testing)

## Introduction

This project is a simple Todo List application. The application features a straightforward login page, task management, and persistent state across sessions.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
# Clone the repository
$ git clone git@github.com:MPiotrowska/todo-login-react-ts.git

# Navigate to the project directory
$ cd todo-login-react-ts

# Install dependencies
$ npm install

# Run the project
$ npm run dev
```

## Features

The application is designed as a simple yet effective TO DO Task management website, featuring a straightforward login system and task management capabilities. The key features are outlined below:

### 🚪 Login System

- **Simple Login Page:** Users can access the website through a basic login interface.
- **Mock Authentication:** The login process involves a fake request for authentication. This request does not involve any network activity and always returns a valid token, simulating a successful login.
- **Persistent Login:** User login state is persisted. If a user closes the webpage and reopens it, the login state is retained, ensuring seamless user experience.
- **Token Storage:** The authentication token is saved using a cookie.

### 📝 Task Management

- **Task Operations:** Once logged in, users can perform several task-related operations:
  - **Add Tasks:** Users can add new tasks to their TO DO list.
  - **Update Tasks:** Existing tasks can be modified or updated.
  - **Mark as Done:** Tasks can be marked as completed.
  - **Remove Tasks:** Users have the option to delete tasks from their list.
- **No Task Persistence:** Tasks are not persisted after signing out. When a user signs out and signs back in, the task list starts fresh.

## Technologies

- 🎨 **SCSS** - Advanced, expressive, and efficient styling capabilities beyond standard CSS.
- 📘 **TypeScript** - A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- ⚛️ **Create-react-app with Vite** - A React framework providing a fast, reliable, and flexible development experience. Vite enhances the project with its optimized build tool, offering rapid hot module replacement (HMR).
- 🧪 **Jest and React Testing Library** - A combination for writing and running unit and integration tests. Jest offers a robust testing framework with a focus on simplicity, while React Testing Library provides light-weight utilities to test components in a way users interact with them.

### Testing

To run the tests run `npm test`

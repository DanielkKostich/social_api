# Social_API

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


## Description

This is a RESTful API for a social media platform that uses a NoSQL database. It allows you to handle large amounts of unstructured data, such as users, thoughts, reactions, and friends.

## Table of Contents

- [Installation](#installation)
- [User Routes](#users-routes)
- [Thought Routes](#thoughts-routes)
- [Contribution](#contributing)
- [License](#license)

## Installation

Clone the repository: git clone https://github.com/your/repository.git
Install the dependencies: npm install
Set up the database: Ensure you have MongoDB installed and running locally or provide a MongoDB connection URI.
Start the server: npm start

## Users Routes

GET /api/users: Get all users.
GET /api/users/:id: Get a user by ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID.
POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.

## Thoughts Routes

GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update a thought by ID.
DELETE /api/thoughts/:id: Delete a thought by ID.
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions: Remove a reaction from a thought.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the MIT License.


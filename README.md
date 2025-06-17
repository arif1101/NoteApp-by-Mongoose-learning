# NoteApp

A basic NoteApp project for learning and understanding Mongoose with Node.js and Express.

## Features

- Create a note and save it to MongoDB
- Define schemas with data types and required fields
- Get all notes
- Get a single note by ID

## Endpoints

- `POST /notes/create-note`  
  Create a new note.  
  **Body:**  
  ```json
  {
    "title": "Note Title",
    "content": "Note content",
    "category": "personal | work | study | other",
    "pinned": false,
    "tags": {
      "label": "tag label",
      "color": "gray"
    }
  }
  ```

- `GET /notes`  
  Get all notes.

- `GET /notes/:noteId`  
  Get a single note by its ID.

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```

## Learning Goals

- Understand how to define Mongoose schemas and models
- Learn about data types and required fields in Mongoose
- Practice basic CRUD operations with
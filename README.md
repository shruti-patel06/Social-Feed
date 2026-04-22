# SocialFeed

A social media application for sharing images and captions, featuring a dynamic feed where users can create and view posts.

## Features

- Create posts with image uploads and captions
- View a feed of all posts
- Image storage using ImageKit
- Responsive React frontend
- RESTful API backend with MongoDB

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- ImageKit for image storage
- Multer for file uploads
- CORS for cross-origin requests

### Frontend
- React 19
- Vite for build tooling
- React Router for navigation
- Axios for HTTP requests
- CSS for styling

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- ImageKit account for image storage

### Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

4. Start the backend server:
   ```bash
   node server.js
   ```

The backend will run on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the Frontend/vite-project directory:
   ```bash
   cd Frontend/vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on `http://localhost:5173` (default Vite port).

## Usage

1. Open your browser and go to the frontend URL (e.g., `http://localhost:5173`).
2. Navigate to `/create-post` to create a new post by uploading an image and adding a caption.
3. After creating a post, you'll be redirected to `/feed-section` to view all posts.
4. The feed displays all posts with their images and captions.

## API Endpoints

### POST /create-post
Creates a new post.
- **Method:** POST
- **Content-Type:** multipart/form-data
- **Body:**
  - `image`: Image file
  - `caption`: Text caption
- **Response:** JSON with created post data

### GET /posts
Retrieves all posts.
- **Method:** GET
- **Response:** JSON array of posts

## Project Structure

```
IG app/
├── Backend/
│   ├── package.json
│   ├── server.js
│   ├── .env
│   └── src/
│       ├── app.js
│       ├── db/
│       │   └── db.js
│       ├── models/
│       │   └── post.model.js
│       └── services/
│           └── storage.service.js
└── Frontend/
    └── vite-project/
        ├── package.json
        ├── index.html
        ├── vite.config.js
        ├── src/
        │   ├── App.jsx
        │   ├── main.jsx
        │   ├── index.css
        │   ├── App.css
        │   ├── assets/
        │   └── pages/
        │       ├── CreatePost.jsx
        │       └── Feed.jsx
        └── public/
```


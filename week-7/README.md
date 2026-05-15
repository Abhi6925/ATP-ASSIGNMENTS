# Blog Application
This is a full stack web application to manage and read blog posts. I built this using the MERN stack to learn how to connect a frontend with a database and handle different user roles like User, Author, and Admin.

## Technologies used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **State Management**: Zustand
- **Media Storage**: Cloudinary
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Vercel

## Features
- **User Roles**: Separate functionality for Users, Authors, and Admins.
- **Article Management**: Authors can create, edit, and delete their own articles.
- **Commenting System**: Users can read articles and leave comments.
- **Admin Dashboard**: Admin can view all accounts and block/unblock users.
- **Image Uploads**: Integrated Cloudinary for uploading profile pictures.
- **Responsive Design**: Works perfectly on both desktop and mobile.

## Setup and Installation

### Backend
1. Go to the `backend` folder.
2. Run `npm install` to install packages.
3. Create a `.env` file and add your MongoDB connection string as `DB_URL`.
4. Add your `SECRET_KEY` and Cloudinary credentials (`CLOUDINARY_CLOUD_NAME`, etc.).
5. Run `npm start` to run the server.

### Frontend
1. Go to the `frontend` folder.
2. Run `npm install`.
3. Run `npm run dev` to start the application locally.

## Links
- **Frontend**: https://frontend-eta-six-29.vercel.app


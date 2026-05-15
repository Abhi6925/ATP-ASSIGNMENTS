# Blog App - Backend
This is the backend server for the Blog Application. I built this using Node.js and Express to handle all the API requests, database interactions, and authentication.

## Details
- **Framework**: Express.js
- **Database**: MongoDB via Mongoose
- **Deployment**: Vercel

## Endpoints

### Auth APIs
- `POST /auth/register`: registers a new user
- `POST /auth/login`: logins user and sets cookie
- `GET /auth/logout`: logouts user and clears cookie

### User APIs
- `GET /user-api/articles`: gets the list of all active articles
- `PUT /user-api/articles`: adds a comment to an article

### Author APIs
- `POST /author-api/article`: publishes a new article
- `GET /author-api/articles`: gets articles written by the author
- `PUT /author-api/articles`: updates an existing article
- `PATCH /author-api/articles`: soft deletes or restores an article

### Admin APIs
- `GET /admin-api/users`: gets all user and author accounts
- `PATCH /admin-api/users/:userId/status`: blocks/unblocks a user
- `GET /admin-api/dashboard`: gets statistics for the admin dashboard

## Setup and Installation
1. Go to the `backend` folder.
2. Run `npm install` to install all dependencies.
3. Create a `.env` file and add the following:
   - `DB_URL` = mongodb+srv://dhairya:dhairya_041@cluster0.fij6bmw.mongodb.net/?appName=Cluster0
   - `PORT` = 5000
   - `SECRET_KEY` = (Your JWT secret)
   - `CLOUDINARY_CLOUD_NAME` = (Your Cloudinary cloud name)
   - `CLOUDINARY_API_KEY` = (Your Cloudinary API key)
   - `CLOUDINARY_API_SECRET` = (Your Cloudinary API secret)
4. Run `npm start` to start the server.

## Links
- **API Base URL**: https://backend-coral-two-89.vercel.app

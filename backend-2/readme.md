//steps to create Backend
1. generate package.json 
    create .env
2. create express server
3. install mongoose and connect to mongoDB server
    REST API-mongoDB native driver->DB server
    REST API-mongoose  ODM(object document mapping) tool->DB server//used to connect to mongoDB server
//actual Backend
4. create Schema and Model of the Resource(Users)

5. Build User REST API 
        -Create user
        -read all users 
        -read a user by ID
        -update a user by ID
        -delete a user by ID

6. create UserApi and define routes

->handling unavailable resourses
->validators during update
->hashing password(bcryptjs)
->unique fields
->refined version of error handling middleware

7. User Authentication(Login)
    >submit credentials and get token

    req---->Public Routes(By anyOne)
    req--->middleware--->Protected Routes(By authenticated Users only)


    read users and products
    read user and product by id
    update user and product
    delete user and product


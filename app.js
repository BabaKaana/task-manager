const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./database/connect');
require('dotenv').config();

// middleware

app.use(express.json())


// routes

app.get('/hello', (req,res)=>{
    res.send('<h1 style="font-size: 100px;">  Hello g, kia haal hai </h1>');
})

app.use('/api/v1/tasks', tasks)



const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Database Connected...!");
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } 
    catch (error) {
        console.log(error);
    }
}

start();
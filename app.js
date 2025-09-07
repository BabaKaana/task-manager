const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./database/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');


app.use(express.static('./public'));
app.use(express.json())


app.use('/api/v1/tasks', tasks)

app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 3000;

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
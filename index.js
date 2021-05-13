const express = require('express');
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')

const VideoLibraryRouter = require("./Routes/VideoLibrary.route")
const { addToDatabase } = require("./Database/addToDatabase.js")
const { databaseConnection } = require("./Database/databaseConnection.connect.js")
const PORT = 3000;

const corsOptions = {
  origin: "https://gortitube.netlify.app"
}

databaseConnection();

// Initial function run to add the data to MongoDB
// addToDatabase();

app.use("/", cors(corsOptions), VideoLibraryRouter);

app.get('/', (req, res) => {
  res.send('Please visit "https://gortitube.netlify.app/" to view the application. ')
});


app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});

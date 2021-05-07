const express = require('express');
const mongoose = require("mongoose")
const app = express();
var cors = require('cors')

const VideoLibraryRouter = require("./Routes/VideoLibrary.route")
const { addToDatabase } = require("./Database/addToDatabase.js")
const { databaseConnection } = require("./Database/databaseConnection.connect.js")
const PORT = 3000;

app.use(cors());


databaseConnection();

// addToDatabase();

app.use("/", VideoLibraryRouter);



app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});

const express = require('express');
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

const VideoLibraryRouter = require("./routes/videos.route")
const UserRouter = require("./routes/user.route")
const { addToDatabase } = require("./database/addToDatabase.js")
const { databaseConnection } = require("./database/databaseConnection.connect.js")
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

databaseConnection();

// Initial function run to add the data to MongoDB
// addToDatabase();

app.use("/videos", VideoLibraryRouter);
app.use("/user", UserRouter);

app.get('/', (req, res) => {
  res.send('Please visit "https://gortitube.netlify.app/" to view the application. ')
});


app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});

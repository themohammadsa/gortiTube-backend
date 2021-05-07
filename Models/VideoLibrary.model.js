const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  id: String,
  title: String,
  author: String,
  avatar: String,
  thumbnail: String,
  views: Number,
  date: Number,
  subscribers: Number,
  likes: Number,
  dislikes: Number,
  description: String
});


const VideoLibrary = mongoose.model("VideoLibrary", videoSchema)

module.exports = { VideoLibrary }

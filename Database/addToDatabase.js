
const mongoose = require("mongoose")
const VideoLibrary = require("../Models/VideoLibrary.model")
const { data } = require("./data")

function addToDatabase() {
    data.map((video) => {  
      const NewVideo = new VideoLibrary(video);
      const savedVideo = NewVideo.save();
    })
}

module.exports = { addToDatabase }


const mongoose = require("mongoose")
const VideoLibrary = require("../Models/VideoLibrary.model")
const {
  customizedData,
  fakerData
} = require("./data")

function addToDatabase() {
  customizedData.map((video) => {
    const data = {
      ...video,
      ...fakerData
    }
    const NewVideo = new VideoLibrary(data);
    NewVideo.save();
  })
}

module.exports = {
  addToDatabase
}
const mongoose = require("mongoose")
const { Schema } = mongoose;

const playlistSchema = new Schema({
    name: String,
    video: [String]
})

const userSchema = new Schema({
    name: {
        type: String,
        required: "Name of the user is required",
    },
    password: {
        type: String,
        required: "Password is a required attribute",
    },
    email: {
        type: String,
        required: "Email is a mandatory attribute",
        unique: true,
        lowercase: true
    },
    likedVideos: [String],
    playlist: [playlistSchema],
    watchLater: [String],
    history: [String]
})

const User = mongoose.model("UserGortiTube", userSchema);

module.exports = { User }
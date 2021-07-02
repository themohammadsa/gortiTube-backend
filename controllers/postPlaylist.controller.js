const { User } = require("../models/user.model")

const createPlaylist = async (req, res) => {
    const { userId } = req.user;
    const { videoId, playlistName } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });

        try {
          data.playlist = [ ...data.playlist, 
            {
              name: playlistName, 
              video: []
            }]
            console.log("created playlist", data.playlist)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Created playlist", 
          })
        } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
        } else {
            res.status(412).json({ 
              success: false, 
              message: "Data is missing" });
        }
}

const addToPlaylist = async (req, res) => {
    const { userId } = req.user;
    const { videoId, playlistName } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
          const index = data.playlist.findIndex(
          (obj) => obj.name === playlistName)
        try {
          const videoPresent = data.playlist[index].video.some((video) => video === videoId)

          if(!videoPresent) {
          data.playlist[index].video = data.playlist[index].video.concat(videoId)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added video to playlist", 
          })     
        } else {
          res.json({ 
          success: true, 
          message: "Already added to playlist", 
          })    
        }   
        } catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
        } else {
            res.status(412).json({ 
              success: false, 
              message: "Data is missing" });
        }
}

const removeFromPlaylist = async (req, res) => {
    const { userId } = req.user;
    const { videoId, playlistName } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
          const index = data.playlist.findIndex(
          (obj) => obj.name === playlistName)
        try {
         
          data.playlist[index].video = data.playlist[index].video.filter((video) => video !== videoId)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed video from playlist", 
          })     
        }
         catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
       } else {
          res.status(412).json({ 
            success: false, 
            message: "Data is missing" });
        }
}

const deletePlaylist = async (req, res) => {
    const { userId } = req.user;
    const { playlistName } = req.body;

      if (playlistName) {
          const data = await User.findById({ _id: userId });
          
        try {
         
          data.playlist = data.playlist.filter((playlist) => playlist.name !== playlistName)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Deleted the playlist", 
          })     
        }
         catch (error) {
            res.status(500).json({ 
              success: false, 
              message: "Server error. Please try again." })
          }
       } else {
          res.status(412).json({ 
            success: false, 
            message: "Data is missing" });
        }
}

module.exports = { createPlaylist, addToPlaylist, removeFromPlaylist, deletePlaylist }
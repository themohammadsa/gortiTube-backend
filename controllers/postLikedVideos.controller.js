const { User } = require("../models/user.model")

const addToLikedVideos = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });

        try {
          const videoPresent = data.likedVideos.some((video) => video === videoId)

          if(!videoPresent) {
          data.likedVideos = data.likedVideos.concat(videoId)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added to liked videos", 
          })     
        } else {
          res.json({ 
          success: true, 
          message: "Already added to liked videos", 
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

const removeFromLikedVideos = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
        try {
          data.likedVideos = data.likedVideos.filter((video) => video !== videoId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from liked videos", 
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


module.exports = { addToLikedVideos, removeFromLikedVideos }
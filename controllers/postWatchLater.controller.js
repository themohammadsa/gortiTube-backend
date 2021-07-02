const { User } = require("../models/user.model")

const addToWatchLater = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });

        try {
          const videoPresent = data.watchLater.some((video) => video === videoId)

          if(!videoPresent) {
          data.watchLater = data.watchLater.concat(videoId)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added to watch later", 
          })     
        } else {
          res.json({ 
          success: true, 
          message: "Already added to watch later", 
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

const removeFromWatchLater = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
        try {
          data.watchLater = data.watchLater.filter((video) => video !== videoId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from watch later", 
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

module.exports = { addToWatchLater, removeFromWatchLater }
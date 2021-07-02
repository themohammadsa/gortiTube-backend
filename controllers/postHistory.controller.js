const { User } = require("../models/user.model")

const addToHistory = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });

        try {
          const videoPresent = data.history.some((video) => video === videoId)

          if(!videoPresent) {
          data.history = data.history.concat(videoId)

          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Added to history", 
          })     
        } else {
          res.json({ 
          success: true, 
          message: "Already added to history", 
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

const removeFromHistory = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
        try {
          data.history = data.history.filter((video) => video !== videoId)
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from history", 
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


const clearHistory = async (req, res) => {
    const { userId } = req.user;
    const { videoId } = req.body;

      if (videoId) {
          const data = await User.findById({ _id: userId });
        try {
          data.history = []
          const response = await data.save()
          res.json({ 
          success: true, 
          message: "Removed from history", 
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

module.exports = { addToHistory, removeFromHistory, clearHistory }
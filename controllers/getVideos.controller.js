const { VideoLibrary } = require("../models/videoLibrary.model")

const getAllVideos = async (req, res) => {
  try {
    const videos = await VideoLibrary.find({});
    res.json({success: true, videos});
  } catch (err) {
    res.status(500).json({  
      success: false, error: "Unable to get Videos from server!"
    })
  }  
}

const getVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await VideoLibrary.find({id: id});
    res.json(({success: true, video}));
  } catch (err) {
      res.status(500).json({  
      success: false, error: "Unable to get Video from server!"
    })
  }
}

module.exports = { getAllVideos, getVideo }
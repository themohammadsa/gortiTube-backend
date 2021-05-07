const express = require("express");
const { VideoLibrary } = require("../Models/VideoLibrary.model.js");
const router = express.Router();

router.route("/videolibrary")
.get(async (req, res) => {
  try {
    const videos = await VideoLibrary.find({});
    res.json({success: true, videos});
  } catch (err) {
    res.status(500).json({  
      success: false, error: "Unable to get Videos from server!"
    })
  }  
})

router.route("/watch/:id")
.get(async (req, res) => {
  try {
    const { id } = req.params;
    const video = await VideoLibrary.find({id: id});
    res.json(({success: true, video}));
  } catch (err) {
      res.status(500).json({  
      success: false, error: "Unable to get Video from server!"
    })
  }
});

module.exports = router;

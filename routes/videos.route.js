const express = require("express");
const router = express.Router();
const { getAllVideos, getVideo } = require("../controllers/getVideos.controller.js");

router.route("/videolibrary")
.get(getAllVideos)

router.route("/watch/:id")
.get(getVideo);

module.exports = router;

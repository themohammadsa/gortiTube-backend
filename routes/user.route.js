var express = require('express');
const router = express.Router();
const { authHandler } = require("../middlewares/auth.middleware.js")
const { signUp } = require("../controllers/signUp.controller")
const { login } = require("../controllers/login.controller")
const { getUserData } = require("../controllers/getUserData.controller")
const { addToLikedVideos, removeFromLikedVideos } = require("../controllers/postLikedVideos.controller")
const { addToHistory, removeFromHistory, clearHistory } = require("../controllers/postHistory.controller")
const { addToWatchLater, removeFromWatchLater } = require("../controllers/postWatchLater.controller")
const { createPlaylist, addToPlaylist, removeFromPlaylist, deletePlaylist } = require("../controllers/postPlaylist.controller")

router.route("/signup")
  .post(signUp)

router.route("/login")
  .post(login)

router.route("/")
  .get(authHandler, getUserData)

router.route("/likedvideos/add")
  .post(authHandler, addToLikedVideos)

router.route("/likedvideos/remove")
  .post(authHandler, removeFromLikedVideos)

router.route("/history/add")
  .post(authHandler, addToHistory)

router.route("/history/remove")
  .post(authHandler, removeFromHistory)

router.route("/history/clear")
  .post(authHandler, clearHistory)

router.route("/watchLater/add")
  .post(authHandler, addToWatchLater)

router.route("/watchLater/remove")
  .post(authHandler, removeFromWatchLater)

router.route("/playlist/create")
  .post(authHandler, createPlaylist)

router.route("/playlist/add")
  .post(authHandler, addToPlaylist)

router.route("/playlist/remove")
  .post(authHandler, removeFromPlaylist)

router.route("/playlist/delete")
  .post(authHandler, deletePlaylist)

module.exports = router;

const router = require("express").Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  userStats
} = require("../controllers/userCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

//UPDATE USER
router.put("/:id", authMiddleware, updateUser);

//DELETE
router.delete("/:id", authMiddleware, deleteUser);

//GET
router.get("/find/:id", getUser);

//GET ALL
router.get("/",authMiddleware,getAllUser);

//GET User STATS
router.get("/stats",authMiddleware,userStats);

module.exports = router;

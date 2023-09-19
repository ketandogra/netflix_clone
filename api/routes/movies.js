const router = require("express").Router();
const {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovie,
  randomMovie,
  getAllMovie,
 
} = require("../controllers/movieCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

// CREATE MOVIE
router.post("/", authMiddleware, createMovie);

//UPDATE MOVIE
router.put("/:id", authMiddleware, updateMovie);

//GET
router.get("/find/:id", getMovie);

//DELETE
router.delete("/:id", authMiddleware, deleteMovie);

//GET RANDOM
router.get("/random",authMiddleware,randomMovie);

//GET ALL MOVIE
router.get("/", authMiddleware, getAllMovie);


module.exports = router;

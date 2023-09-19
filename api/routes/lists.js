const router = require("express").Router();
const {
  createList,
  deleteList,
  getList
} = require("../controllers/listCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");

// CREATE List
router.post("/", authMiddleware, createList);



//GET
router.get("/", getList);

//DELETE List
router.delete("/:id", authMiddleware, deleteList);

module.exports = router;

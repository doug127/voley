const express = require("express");
const router = express.Router();
const {
  getAtletas,
  addAtleta,
  deleteAtleta,
  updateAtleta,
} = require("../controllers/atleta");
const verifyToken = require("../middleware/auth");

router.get("/", getAtletas);
router.post("/", verifyToken, addAtleta);
router.delete("/:id", verifyToken, deleteAtleta);
router.put("/:id", verifyToken, updateAtleta);

module.exports = router;

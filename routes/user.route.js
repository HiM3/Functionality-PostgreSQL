const express = require("express");
const {
  create,
  getALl,
  getUser,
  update,
  trash,
} = require("../controllers/user.controller");

const router = express.Router();

// GET /users
router.get("/getAll", getALl);

// GET /users/:id
router.get("getUser/:id", getUser);

// POST /users
router.post("/create", create);

// PUT /users/:id
router.put("update/:id", update);

// DELETE /users/:id
router.delete("delete/:id", trash);

module.exports = router;

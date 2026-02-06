const express = require("express");
const router = express.Router();

const {createUser} = require("../controllers/useController");

router.post("/users", createUser);




module.exports = router;

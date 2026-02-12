const express = require("express");
const router = express.Router();

const {createUser , namesPrint , deleteRow , deleteInput} = require("../controllers/useController");




router.post("/users", createUser);

router.get("/names",namesPrint)

router.delete("/delete",deleteRow)

router.delete("/inputdelete",deleteInput)



module.exports = router;

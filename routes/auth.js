const express = require("express");
const router = express.Router();

const { register, login, refresh, user } = require("../controllers/authController");

router.post("/", async (req,res) => {
    res.sendStatus(400);
});

router.post("/register", register);
router.post("/login" , login);
router.post("/refresh" , refresh);
router.post("/user" , user);
router.get("/user" , user);
router.put("/user" , user);
router.delete("/user" , user);

module.exports = router;
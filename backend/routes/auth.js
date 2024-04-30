const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
router.get("/", (req, res) => {
  res.send("Hello World from auth!");
});

router.post(
  "/",
  [
    body("name",'Enter a valid Name').isLength({ min: 3 }),
    body("email",'Enter a valid Email').isEmail(),
    body("password",'Enter a valid Password').isLength({ min: 5 }),
  ],
 async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const findUser = await User.findOne({ email: req.body.email });
    if(findUser){
      return res.status(400).json({ error: "Sorry User already exists with that email" });
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user = await  User(req.body);
    user
      .save()
      .then(() => {
        res.status(201).send(user);
      })
      .catch((e) => {
        res.status(400).send(e);
      });
  }
);

module.exports = router;

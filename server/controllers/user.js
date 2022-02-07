const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//Register
const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).send({ msg: "Email already in use" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashedPassword }).save();
    res
      .status(201)
      .send({ msg: `User ${req.body.username} created succesfully` });
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

//Login
const login = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser)
      return res.status(401).send({ msg: "Wrong email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!validPassword)
      return res.status(401).send({ msg: "Wrong email or password" });

    const token = jwt.sign(
      { id: existingUser._id, isAdmin: existingUser.isAdmin },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );
    res.status(200).send({ msg: "Logged in succesfully", token });
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

module.exports = { register, login };

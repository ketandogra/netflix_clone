const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  const email = req.body.email;

  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      //Create a new User

      //encrypt the user entered password
      const securePassword = await bcrypt.hash(req.body.password, 10);

      //creating new user with encrypt password
      const newUser = await User.create({
        ...req.body,
        password: securePassword,
      });

      res.json(newUser);
    }else{
      res.json("Your already exists!")
    }
  } catch (err) {
    console.log(err);
  }
};

//login action
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // function for password match
    const isPasswordMatched = async (enterPassword, userPassword) => {
      return await bcrypt.compare(enterPassword, userPassword);
    };

    //check if user exists or not
    const findUser = await User.findOne({ email });

    if (findUser && (await isPasswordMatched(password, findUser.password))) {
      const accessToken = jwt.sign(
        { id: findUser._id, isAdmin: findUser.isAdmin },
        process.env.JWT_SECRET,
        { expiresIn: "5d" }
      );
      const { password, ...info } = findUser._doc;

      res.status(200).json({ ...info, accessToken });
    } else {
      res.status(401).json("Invalid userId or password! ");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createUser,
  loginUser,
};

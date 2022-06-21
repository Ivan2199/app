const { User } = require("../models/user");
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register(req, res) {
    try {
      const { email, password } = req.body;

      const existingUser = await User.findOne({ where: { email: email } });
      if (existingUser) {
        return res.status(409).send({
          error: `User with email ${email} already exists.`,
        });
      }

      const newUser = await User.create({
        email,
        password,
      });

      const { email: userEmail } = newUser.toJSON();

      return res.send({
        user: { userEmail },
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .send({ error: `An error occured while saving the user ${email}` });
    }
  },
  async login (req, res) {
    try{
      const {email, password} = req.body;

      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if(!user) {
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }
      const isPasswordValid = await user.comparePassword(password)
      if(!isPasswordValid){
        return res.status(403).send({
          error: 'The login information is incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'Invalid login information!'
      })
    }
  }
};

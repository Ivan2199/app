const { User } = require("../models");

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
};

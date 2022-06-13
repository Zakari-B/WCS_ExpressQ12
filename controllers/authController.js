const userDataAccess = require("../models/user");
const { calculateToken } = require("../helpers/users");
const { verifyPassword } = require("../models/user");

exports.login = (req, res) => {
  const { email, password } = req.body;
  userDataAccess.findByEmail(email).then((user) => {
    if (!user) {
      res.status(401).send("Invalid credentials");
    } else {
      verifyPassword(password, user.hashedPassword).then((verification) => {
        if (verification) {
          delete user.password;
          const token = calculateToken(user);
          res.cookie("auth_token", token, { httpOnly: true, secure: false });
          res.status(200).json({ user_id: user.id });
        } else {
          res.status(401).send("Invalid credentials");
        }
      });
    }
  });
};

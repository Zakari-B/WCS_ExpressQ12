const { decodeToken } = require("../helpers/users");

const authorization = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const data = decodeToken(token);
    req.userId = data.payload.id;
    req.email = data.payload.email;
    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = authorization;

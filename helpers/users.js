const jwt = require("jsonwebtoken");

const PRIVATE_KEY = "superSecretStringNowoneShouldKnowOrTheyCanGenerateTokens";

const calculateToken = (payload) => {
  console.log(payload);
  return jwt.sign({ payload }, PRIVATE_KEY, { expiresIn: "1h" });
};

const decodeToken = (token) => {
  return jwt.decode(token, PRIVATE_KEY);
};

module.exports = { calculateToken, decodeToken };

const moviesRouter = require("./movies");
const usersRouter = require("./users");
const authRouter = require("./auth");

const auth = require("../middlewares/auth");

const setupRoutes = (app) => {
  app.use("/api/movies", auth, moviesRouter);
  app.use("/api/users", usersRouter);
  app.use("/api/auth", authRouter);
};

module.exports = {
  setupRoutes,
};

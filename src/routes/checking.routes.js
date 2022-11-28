module.exports = (app) => {
  const checking = require("../controllers/checking.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", checking.create);

  // Retrieve
  router.get("/", checking.getAll);

  app.use("/api/checking", router);
};

module.exports = (app) => {
  const testing = require("../controllers/testing.controller.js");

  var router = require("express").Router();

  // Create
  router.post("/", testing.create);

  // Retrieve
  router.get("/", testing.getAll);

  app.use("/api/testing", router);
};

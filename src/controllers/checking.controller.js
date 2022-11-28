// Create and Save
exports.create = (req, res) => {
  res.status(200).send({
    success: "Successfully created data!",
  });
};

// Retrieve all
exports.getAll = (req, res) => {
  res.status(200).send({
    success: "Succefully send data!",
  });
};

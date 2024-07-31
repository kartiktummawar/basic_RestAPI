const express = require("express");
const {
  handleGetAllUsers,
  handleAddNewUser,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
} = require("../controller/user.js");
const Router = express.Router();

Router.route("/").get(handleGetAllUsers).post(handleAddNewUser);

Router.route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = {
  Router,
};

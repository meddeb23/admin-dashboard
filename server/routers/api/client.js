const express = require("express");
const {
  createClient,
  getClient,
  updateClient,
  getAllClient,
  deleteClient,
} = require("../../controller/clientController");
const route = express.Router();

// @route   POST /api/v1/client/create
// @desc    Create new client
// @access  Privat
route.post("/create", createClient);

// @route   GET /api/v1/client/all?offset=0&limit=10
// @desc    get all client
// @access  Privat
route.get("/all", getAllClient);

// @route   GET /api/v1/client/:clientId
// @desc    get client by id
// @access  Privat
route.get("/:clientId", getClient);

// @route   POST /api/v1/client/update
// @desc    update client detail
// @access  Privat
route.post("/update", updateClient);

// @route   POST /api/v1/client/delete
// @desc    Delete client
// @access  Privat
route.post("/delete", deleteClient);

module.exports = route;

const express = require("express");
const {
  createClient,
  getClient,
  updateClient,
  getAllClient,
  deleteClient,
  searchClient,
} = require("../../controller/clientController");
const { auth } = require("../../middleware/authMiddleware");
const router = require("./user");

const route = express.Router();

// @route   POST /api/v1/client/create
// @desc    Create new client
// @access  Privat
route.post("/create", auth, createClient);

// @route   GET /api/v1/client/all?offset=0&limit=10
// @desc    get all client
// @access  Privat
route.get("/all", auth, getAllClient);

// @route   GET /api/v1/client/search?searchQuery&offset=0&limit=10
// @desc    search for clients
// @access  Privat
route.get("/search", auth, searchClient);

// @route   POST /api/v1/client/update
// @desc    update client detail
// @access  Privat
route.put("/update", auth, updateClient);

// @route   POST /api/v1/client/delete
// @desc    Delete client
// @access  Privat
route.delete("/delete", auth, deleteClient);

// @route   GET /api/v1/client/:clientId
// @desc    get client by id
// @access  Privat
route.get("/:clientId", auth, getClient);

module.exports = route;

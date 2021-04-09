const Client = require("../models/client");
const Appo = require("../models/Appointment");

exports.createClient = async (req, res) => {
  const {
    firstName,
    lastName,
    birthday,
    email,
    sexe,
    disease,
    operations,
  } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !birthday || !sexe || !disease)
    return res.status(400).json({ message: "All Field required!" });

  try {
    const client = await Client.findOne({ email });
    if (client) return res.status(400).json({ message: "Email alrady used" });

    const newClient = new Client({
      firstName,
      lastName,
      birthday,
      email,
      sexe,
      disease,
      operations,
    });
    const savedClient = await newClient.save();
    if (!newClient) return res.status(500).json({ message: "Internal Error" });

    res.status(200).json({
      savedClient,
    });
  } catch (error) {
    res.status(500).json({
      message:
        error.message || "Some error occurred while creating the Client.",
    });
  }
};

exports.deleteClient = async (req, res) => {
  const { clientId } = req.body;
  try {
    const removedClient = await Client.findByIdAndRemove(clientId);
    if (!removedClient)
      return res
        .status(404)
        .json({ message: "Client not found with id " + clientId });
    res.status(200).json({ message: "Client deleted successfully!" });
  } catch (error) {
    if (err.kind === "ObjectId" || err.name === "NotFound") {
      return res.status(404).json({
        message: "Client not found with id " + clientId,
      });
    }
    return res.status(500).json({
      message: "Could not delete client with id " + clientId,
    });
  }
};

exports.getClient = async (req, res) => {
  const { clientId } = req.params;

  try {
    const client = await Client.findById(clientId);
    if (!client)
      return res
        .status(404)
        .json({ message: "Client not found with id " + req.params.clientId });

    res.status(200).json({ client });
  } catch (error) {
    if (error.kind === "ObjectId")
      return res.status(404).send({
        message: "Client not found with id " + req.params.clientId,
      });
    return res.status(500).send({
      message: "Error retrieving client with id " + req.params.clientId,
    });
  }
};

exports.getAllClient = async (req, res) => {
  try {
    let { limit, offset } = req.query;

    (limit = parseInt(limit)), (offset = parseInt(offset));
    console.log(limit, offset);
    if (!limit || (!offset && offset !== 0)) {
      limit = 50;
      offset = 0;
    }
    console.log(limit);
    const clients = await Client.find().limit(limit).skip(offset);

    res.status(200).json({ clients });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving clients.",
    });
  }
};

exports.updateClient = async (req, res) => {
  const {
    clientId,
    firstName,
    lastName,
    birthday,
    email,
    sexe,
    disease,
    operations,
  } = req.body;

  // Simple validation
  if (!firstName || !lastName || !email || !birthday || !sexe || !disease)
    return res.status(400).json({ message: "All Field required!" });
  if (!clientId) return res.status(400).json({ message: "no Client Id" });
  try {
    console.log(clientId);

    const updatedClient = await Client.findByIdAndUpdate(
      clientId,
      {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        email: email,
        sexe: sexe,
        disease: disease,
        operations: operations,
        updated_at: Date.now(),
      },
      { new: true }
    );

    if (!updatedClient)
      return res.status(404).json({
        message: "Client not found with id " + clientId,
      });

    res.status(200).json({ updatedClient });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).send({
        message: "Client not found with id " + req.params.clientId,
      });
    }
    return res.status(500).send({
      message: "Error updating client with id " + req.params.clientId,
    });
  }
};

exports.searchClient = async (req, res) => {
  try {
    let { limit, offset } = req.query;
    let credentials = {};
    for (const key of Object.keys(req.query)) {
      if (key !== "limit" && key !== "offset") {
        credentials[key] = req.query[key];
      }
    }
    (limit = parseInt(limit)), (offset = parseInt(offset));
    if (!limit || (!offset && offset !== 0)) {
      limit = 50;
      offset = 0;
    }
    const clients = await Client.find(credentials).limit(limit).skip(offset);
    if (clients.length === 0)
      return res
        .status(404)
        .json({ message: "No Client with these credentials", credentials });
    return res.status(200).json({ clients });
  } catch (error) {
    res.status(500).send({
      message: error.message || "Some error occurred while retrieving clients.",
    });
  }
};

exports.takeAppoitment = async (req, res) => {};

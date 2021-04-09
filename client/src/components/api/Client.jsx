import axios from "axios";
axios.defaults.withCredentials = true;

//get client list
export const getClients = async () => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/all`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//add a client
export const addClient = async (newClient) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/create`,
      newClient
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//delete a Client
export const removeClient = async (clientId) => {
  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/delete`,
      clientId
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//edit a Client
export const editClient = async (pId, editProduct) => {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/update`,
      { pId, editProduct }
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//get specific Client
export const getClient = async (clientId) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/${clientId}`
    );
    return res;
  } catch (err) {
    return err.response;
  }
};
//search
export const searchClient = async (q) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/search`,
      q
    );
    return res;
  } catch (err) {
    return err.response;
  }
};

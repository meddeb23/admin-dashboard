import axios from "axios";

export class API {
  static async getClients() {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/all `
    );
    const data = await res.json();

    return data;
  }
  //get a specific
  static async getClient(clientId) {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/${clientId} `
    );
    const data = await res.json();

    return data;
  }
  //add a new client
  static async createClient(client) {
    const res = await axios.create(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/ `,
      JSON.stringify(client),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const data = await res.json();

    return data;
  }
  //remove a client
  static async deleteClient(clientId) {
    const res = await axios.delete(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/delete/`,
      JSON.stringify(clientId)
    );
    const data = await res.json();

    return data;
  }
  //modofie a client data
  static async updateClient(clientId, newClient) {
    const res = await axios.put(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/update`,
      JSON.stringify({ ...newClient, clientId }),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  }
  //search for clients
  static async searchClient(limit, offset, credential) {
    const res = await axios.get(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/client/search?q=${credential}&?limit=${limit}&offset=${offset}`
    );

    const data = await res.json();

    return data;
  }
  //login a user
  static async loginUser(user) {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/login`,
      JSON.stringify(user),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  }
  //register a user
  static async registerUser(user) {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/register`,
      JSON.stringify(user),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    return data;
  }
  //loging out the user
  static async logOut() {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/logout`
    );
    const data = await res.json();

    return data;
  }
}

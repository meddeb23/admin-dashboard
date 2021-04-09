import axios from "axios";
axios.defaults.withCredentials = true;

//login a user
export const loginUser = async (user) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/login`,
      JSON.stringify(user),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    return error.response;
  }
};
//register a user
export const registerUser = async (user) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/register`,
      JSON.stringify(user),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    return res;
  } catch (error) {
    return error.response;
  }
};
//loging out the user
export const logOut = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BASIC_URL}/api/v1/user/logout`
    );

    return res;
  } catch (error) {
    return error.response;
  }
};

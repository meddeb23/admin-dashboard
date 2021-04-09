import React, { useState } from "react";
import { addClient } from "../api/Client";
import { input, labelText } from "../shared/styles";
const AddClient = () => {
  const [client, setclient] = useState({});
  //add a client to the data base
  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await addClient(client);
    if (!res?.message) console.log("success!");
    else console.log(res.message);
  };

  return (
    <div className="bg-gray-50 rounded shadow-md p-2 m-3">
      <h2 className="text-2xl font-semibold">Add a client</h2>

      <form className="grid grid-flow-row">
        <span className="w-5/6  grid grid-cols-2 gap-2">
          <span>
            <label className={labelText}>First name</label>
            <input
              onChange={(e) =>
                setclient({ ...client, firstName: e.target.value })
              }
              className={input}
              type="text"
            />
          </span>
          <span>
            <label class={labelText}>last name</label>
            <input
              onChange={(e) =>
                setclient({ ...client, lastName: e.target.value })
              }
              className={input}
              type="text"
            />
          </span>
        </span>
        <span className="w-5/6 grid grid-cols-2 gap-2">
          <span>
            <label class={labelText}>gender</label>
            <select
              id="gender"
              onChange={(e) => setclient({ ...client, sexe: e.target.value })}
              className={input}
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </span>

          <span>
            <label class={labelText}>birthday</label>
            <input
              onChange={(e) =>
                setclient({ ...client, birthday: e.target.value })
              }
              type="date"
              className={input}
            />
          </span>
        </span>

        <span className="w-5/6 grid grid-cols-2 gap-2">
          <span>
            <label class={labelText}>email</label>
            <input
              onChange={(e) => setclient({ ...client, email: e.target.value })}
              className={input}
              type="email"
            />
          </span>
          <span>
            <label class={labelText}>operations</label>
            <input
              onChange={(e) =>
                setclient({ ...client, operations: e.target.value })
              }
              className={input}
            />
          </span>
        </span>
        <span className="w-5/6">
          <label class={labelText}>disease</label>
          <input
            type="text"
            onChange={(e) => setclient({ ...client, disease: e.target.value })}
            className={input}
          />
        </span>

        <button
          className="text-xl font-medium text-white bg-purple-500 mx-3 py-3 hover:bg-purple-700"
          onClick={handleAdd}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddClient;

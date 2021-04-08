import React, { useState } from "react";
import { addClient } from "../api/Client";
import { input, labelText } from "../shared/styles";
const AddClient = () => {
  const [client, setclient] = useState({});
  //add a client to the data base
  const handleAdd = async (e) => {
    e.preventDefault();
    await addClient(client);
  };

  return (
    <div className="bg-gray-50 rounded shadow-md p-2 m-3">
      <h2 className="text-2xl font-semibold">Add a client</h2>

      <form className="grid grid-flow-row">
        <span className="w-5/6">
          <label className={labelText}>First name</label>
          <input
            onChange={(e) =>
              setclient({ ...client, firstName: e.target.value })
            }
            className={input}
          />
          <label class={labelText}>last name</label>
          <input
            onChange={(e) => setclient({ ...client, lastName: e.target.value })}
            className={input}
          />
        </span>
        <span className="w-5/6">
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

          <label class={labelText}>birthday</label>
          <input
            onChange={(e) => setclient({ ...client, birthday: e.target.value })}
            type="date"
            className={input}
          />
        </span>

        <span className="w-5/6">
          <label class={labelText}>email</label>
          <input
            onChange={(e) => setclient({ ...client, email: e.target.value })}
            className={input}
          />
          <label class={labelText}>operations</label>
          <input
            onChange={(e) =>
              setclient({ ...client, operations: e.target.value })
            }
            className={input}
          />
        </span>

        <label class={labelText}>disease</label>
        <input
          type="text"
          onChange={(e) => setclient({ ...client, disease: e.target.value })}
          className={input}
        />
        <button
          className="text-xl font-medium text-white bg-purple-500"
          onClick={handleAdd}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddClient;

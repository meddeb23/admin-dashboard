import React, { useState } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { motion } from "framer";
import { deleteModal } from "../layout/DeleteModal";
function ClientDetail(client) {
  const [showModal, setShowModal] = useState(false);

  let { path, url } = useRouteMatch();
  console.log({ path, url });
  let { cid } = useParams();
  const [isActive, setisActive] = React.useState([true, false, false]);
  return (
    <React.Fragment>
      Client detail {cid}
      <div class="card text-center" onBlur={() => setShowModal(false)}>
        {showModal && <deleteModal />}
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                class={`nav-link  ${isActive[0] ? "active" : ""} `}
                onClick={() => setisActive([true, false, false])}
              >
                data 1
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${isActive[1] ? "active" : ""}`}
                onClick={() => setisActive([false, true, false])}
              >
                data2
              </a>
            </li>
            <li class="nav-item">
              <a
                class={`nav-link ${isActive[2] ? "active" : ""}`}
                onClick={() => setisActive([false, false, true])}
              >
                data 3
              </a>
            </li>
            <li class="nav-item  ml-auto"></li>
            <li class="nav-item  ml-auto">
              <a href={`${url}/edit`}>
                <button class="btn btn-warning rounded">Edit</button>{" "}
              </a>
              <button
                class="btn btn-danger rounded"
                data-bs-toggle="modal"
                data-bs-target="#delete"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
        <div class="card-body">
          {isActive[0] && (
            <motion.div
              className="base container"
              variants={nextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h5 class="card-title">data 1</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </motion.div>
          )}
          {isActive[1] && (
            <motion.div
              className="toppings container"
              variants={nextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h5 class="card-title">data 2</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </motion.div>
          )}
          {isActive[2] && (
            <motion.div
              className="toppings container"
              variants={nextVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h5 class="card-title">data 3</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </motion.div>
          )}
        </div>
      </div>
      <div class="modal" id="delete" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">DELETE</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this client ?</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button type="button" class="btn btn-danger" color="$red-600">
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ClientDetail;

const containerVariance = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
  exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

import React from "react";
import ModalAdd from "./ModalAdd";

const Navbar = () => {
  return (
    <>
      <nav className="navbar container-fluid">
        <div className="container d-flex align-items-center justify-content-beetwen">
          <h1>📘 Bitácora</h1>

          <button
            className="add-task"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            <i className="bi bi-plus-lg"></i> Agregar tarea
          </button>
        </div>
      </nav>

      <ModalAdd />
    </>
  );
};

export default Navbar;

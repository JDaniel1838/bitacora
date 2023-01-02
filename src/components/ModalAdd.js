import React, { useContext, useState, useEffect } from "react";
import ActivitiesContext from "../context/ActivitiesContext";
import Toasts from "./Toasts";

const ModalAdd = () => {
  const [priority, setPriority] = useState("");
  const [nameActivity, setNameActivity] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const { addActivities } = useContext(ActivitiesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Reset value
    setNameActivity("");
    addActivities({
      id: crypto.randomUUID(),
      nameActivity,
      priority,
      completed: false,
    });
  };

  useEffect(() => {
    if (nameActivity !== "") {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    return () => {};
  }, [nameActivity]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
            <div className="modal-header">
              <h2
                className="modal-title fs-5 color-blue"
                id="exampleModalLabel"
              >
                Nueva Actividad
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Actividad:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={nameActivity}
                    onChange={(e) => setNameActivity(e.target.value)}
                    maxLength="70"
                    required
                  />
                </div>
                <div className="mb-3">
                  <p className="col-form-label">Prioridad:</p>

                  <div className="content-radios">
                    <input
                      className="most-significant"
                      type="radio"
                      id="most-significant"
                      name="priority"
                      value="most-significant"
                      onChange={(e) => setPriority(e.target.value)}
                      hidden
                    />
                    <label
                      htmlFor="most-significant"
                      className="btn btn-task orange"
                    >
                      Más significativa
                    </label>

                    <input
                      className="important"
                      type="radio"
                      id="important"
                      name="priority"
                      value="important"
                      onChange={(e) => setPriority(e.target.value)}
                      hidden
                    />
                    <label htmlFor="important" className="btn btn-task teal">
                      Importante
                    </label>

                    <input
                      className="routine"
                      type="radio"
                      id="routine"
                      name="priority"
                      value="routine"
                      onChange={(e) => setPriority(e.target.value)}
                      hidden
                    />
                    <label htmlFor="routine" className="btn btn-task purple">
                      Rutiniario
                    </label>

                    <input
                      className="maybe"
                      type="radio"
                      id="maybe"
                      name="priority"
                      value="maybe"
                      onChange={(e) => setPriority(e.target.value)}
                      hidden
                      defaultChecked
                    />
                    <label htmlFor="maybe" className="btn btn-task lime">
                      Podría hacerla
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className=" btn-submit"
                data-bs-dismiss={`${isFormValid ? "modal" : ""}`}
                id={`${isFormValid ? "liveToastBtn" : ""}`}
              >
                Agregar
              </button>
            </div>
          </form>
        </div>
      </div>

      <Toasts />
    </>
  );
};

export default ModalAdd;

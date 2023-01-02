import React, { useContext, useEffect, useRef, useState } from "react";
import ActivitiesContext from "../context/ActivitiesContext";
import SeparatorLine from "./SeparatorLine";

const MoreSignificantAct = ({ el, lastItem }) => {
  const { id, nameActivity, priority, completed } = el;
  const [isChecked, setIsChecked] = useState(completed);
  const checkboxSelected = useRef(null);

  useEffect(() => {
    if (completed) {
      checkboxSelected.current.checked = true;
    }
  }, []);

  let contentLabel = "",
    colorClass = "";
  if (priority === "most-significant") {
    contentLabel = "La más significativa";
    colorClass = "orange";
  } else if (priority === "important") {
    contentLabel = "Importante";
    colorClass = "teal";
  } else if (priority === "routine") {
    contentLabel = "Rutinario";
    colorClass = "purple";
  } else {
    contentLabel = "Podría hacerla";
    colorClass = "lime";
  }

  const { completeActivity } = useContext(ActivitiesContext);

  const handleChecked = () => {
    if (!isChecked) {
      setIsChecked(true);
      completeActivity(id, true, priority);
      console.log("Actividad realizada");
    } else {
      console.log("Actividad sin realizar");
      setIsChecked(false);
      completeActivity(id, false, priority);
    }
  };

  return (
    <>
      <div className="list-item">
        <input
          type="checkbox"
          className="hidden-box"
          id={`my-id-${id}`}
          ref={checkboxSelected}
        />
        <label
          htmlFor={`my-id-${id}`}
          className="check--label"
          onClick={handleChecked}
        >
          <span className="check--label-box"></span>
          <span className="check--label-text">{nameActivity}</span>
        </label>
        <span className={`${colorClass} label-priority`}>{contentLabel}</span>
      </div>
      {lastItem && <SeparatorLine />}
    </>
  );
};

export default MoreSignificantAct;

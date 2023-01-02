import { createContext, useEffect, useState } from "react";
import {
  addActivity,
  searchActivity,
  updateStateActivity,
} from "../firebase/api";
const ActivitiesContext = createContext();

const dateNow = new Date();
const TODAY = dateNow.toLocaleDateString().replace(/\//g, "-");
const initialActivity = {
  activities1: [],
  activities2: [],
  activities3: [],
  activities4: [],
  date: TODAY,
  id: crypto.randomUUID(),
};

const ActivitiesProvider = ({ children }) => {
  const [activities1, setActivities1] = useState(initialActivity.activities1);
  const [activities2, setActivities2] = useState(initialActivity.activities2);
  const [activities3, setActivities3] = useState(initialActivity.activities3);
  const [activities4, setActivities4] = useState(initialActivity.activities4);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    const getActivitiesFB = async () => {
      const res = await searchActivity(TODAY);
      console.log(res);
      if (Object.entries(res).length === 0) {
        console.log("No se encontro un registro de actividades de " + TODAY);
      } else {
        setActivities1(res.activities1);
        setActivities2(res.activities2);
        setActivities3(res.activities3);
        setActivities4(res.activities4);
        if (
          res.activities1.length === 0 &&
          res.activities2.length === 0 &&
          res.activities3.length === 0 &&
          res.activities4.length === 0
        ) {
          setIsEmpty(true);
        } else {
          setIsEmpty(false);
        }
      }
    };

    getActivitiesFB();
  }, []);

  const completeActivity = (id, completed, priority) => {
    updateStateActivity(id, completed, priority);
  };

  const addActivities = (el) => {
    if (isEmpty) {
      setIsEmpty(false);
    }
    console.log(el);
    if (el.priority === "most-significant") {
      addActivity(el, TODAY);
      setActivities1([...activities1, el]);
    } else if (el.priority === "important") {
      addActivity(el, TODAY);
      setActivities2([...activities2, el]);
    } else if (el.priority === "routine") {
      addActivity(el, TODAY);
      setActivities3([...activities3, el]);
    } else {
      addActivity(el, TODAY);
      setActivities4([...activities4, el]);
    }
  };

  const data = {
    isEmpty,
    activities1,
    activities2,
    activities3,
    activities4,
    addActivities,
    completeActivity,
  };

  return (
    <ActivitiesContext.Provider value={data}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export { ActivitiesProvider };
export default ActivitiesContext;

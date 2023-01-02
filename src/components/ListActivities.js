import React, { useContext } from "react";
import ActivitiesContext from "../context/ActivitiesContext";
import ListEmpty from "./ListEmpty";
import MoreSignificantAct from "./MoreSignificantAct";

const ListActivities = () => {
  const { isEmpty, activities1, activities2, activities3, activities4 } =
    useContext(ActivitiesContext);

  return (
    <div
      className={`w-100 h-100 ${
        !isEmpty
          ? "d-flex flex-column align-items-center justify-content-start ms-3 pt-3"
          : false
      }`}
    >
      {isEmpty ? <ListEmpty /> : false}
      {activities1.length !== 0
        ? activities1.map((el, i) => {
            if (activities1.length - 1 === i) {
              return <MoreSignificantAct el={el} key={el.id} lastItem={true} />;
            } else {
              return (
                <MoreSignificantAct el={el} key={el.id} lastItem={false} />
              );
            }
          })
        : false}

      {activities2.length !== 0
        ? activities2.map((el, i) => {
            if (activities2.length - 1 === i) {
              return <MoreSignificantAct el={el} key={el.id} lastItem={true} />;
            } else {
              return (
                <MoreSignificantAct el={el} key={el.id} lastItem={false} />
              );
            }
          })
        : false}

      {activities3.length !== 0
        ? activities3.map((el, i) => {
            if (activities3.length - 1 === i) {
              return <MoreSignificantAct el={el} key={el.id} lastItem={true} />;
            } else {
              return (
                <MoreSignificantAct el={el} key={el.id} lastItem={false} />
              );
            }
          })
        : false}

      {activities4.length !== 0
        ? activities4.map((el, i) => {
            if (activities4.length - 1 === i) {
              return <MoreSignificantAct el={el} key={el.id} lastItem={true} />;
            } else {
              return (
                <MoreSignificantAct el={el} key={el.id} lastItem={false} />
              );
            }
          })
        : false}
    </div>
  );
};

export default ListActivities;

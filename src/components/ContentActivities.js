import React from "react";
import ListActivities from "./ListActivities";

const ContentActivities = () => {
  return (
    <div className="main container-fluid min-vh-85">
      <div className="container row my-content-100">
        <div className="text-90-deg col-2">
          <h3 className="title-90-deg">Lista de activades</h3>
        </div>
        <div className="col-10">
          <ListActivities />
        </div>
      </div>
    </div>
  );
};

export default ContentActivities;

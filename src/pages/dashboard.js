import React from "react";

const Dashboard = (props) => {
  return (
    <>
      <p>
        User Dashboard can only be accessed upon success authorization check. You are welcome {props.name}
      </p>
    </>
  );
};

export default Dashboard;

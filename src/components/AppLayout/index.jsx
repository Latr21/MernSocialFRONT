import React from "react";
import Navbar from "../Navbar";
import Clock from "../Clock";

const AppLayout = ({ children, style = {} }) => {
  return (
    <div style={{ ...style }}>
      <header>
        <Clock />
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;

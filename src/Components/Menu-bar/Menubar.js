import React from "react";
import { Button } from "react-bootstrap-v5";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <img
          src="https://mentorplus.co.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.0db42e3e.svg&w=384&q=75"
          alt=""
        />
      </div>
      <div style={{ marginLeft: "340px" }}>
        <ul style={{ display: "flex",listStyle:"none" }}>
          <li className="li-style">Home</li>
          <li className="li-style" >Plans&pricing</li>
          <li className="li-style">FAQ's</li>
          <li className="li-style">Contact Us</li>
        </ul>
      </div>
      <div style={{marginLeft:"200px"}}>
        <Button style={{margin:"5px"}}>Login</Button>
        <Button variant="primary">Sign Up</Button>
      </div>
    </div>
  );
};

export default Menubar;

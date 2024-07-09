import React from "react";
import CV from "../../assets/Lukkhana_Tipchainak_CV.pdf";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div className="flex">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f466301822a0123570d734f3426582db3ce0c4a1b0ec60a9a706683165bdfdcc?"
              className="shrink-0 w-10 aspect-square"
            />
            <div className="my-auto">Lukkhana</div>
          </div>
        </div>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end font-bold">
        <a className="btn" link={CV}>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;

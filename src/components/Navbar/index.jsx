import React from 'react'
import CV from '../../assets/Lukkhana_Tipchainak_CV.pdf';



const Navbar = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div className="flex" >
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
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/skills">Skills</a></li>
      <li><a href="/project">Project</a></li>
      <li><a href="/contact">Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end font-bold">
    <a className="btn" href={CV}>Resume</a>
  </div>
</div>
  )
}

export default Navbar;


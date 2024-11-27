import React from "react";
import Logo from "../assets/icono.png"


function Navbar() {
  return (
    <div className="border border-black bg-slate-400">
      <img
        src={Logo}
        alt="Logo CFL404"
        className="w-8 flex flex-col"
      />
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex gap-4 bg-blue-600 w-[100%] py-6 px-6 font-semibold text-white items-center">
        <Link to={"/"}>
          {" "}
          <h2>Matches</h2>
        </Link>
        <Link to={"/pointtable"}>
          <h2>Point Table</h2>
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;

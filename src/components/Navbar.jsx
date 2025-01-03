import { Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function Navbar() {
  return (
    <div className="w-full lg:w-[50%] min-h-screen mx-auto bg-gray-800 text-white">
    
      <InPageNavigation
        teams={[
          { title: "MATCHES", path: "/" },
          { title: "NEWS", path: "/news" }, 
          { title: "TABLE", path: "/pointtable" },
        ]}
      ></InPageNavigation>
      {/* <Link to={"/"}>
          {" "}
          <h2>Matches</h2>
        </Link>
        <Link to={"/pointtable"}>
          <h2>Point Table</h2>
        </Link> */}
     
      <Outlet />
    </div>
  );
}

export default Navbar;

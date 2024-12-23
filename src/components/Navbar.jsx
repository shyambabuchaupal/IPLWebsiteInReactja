import { Link, Outlet } from "react-router-dom";
import InPageNavigation from "./InPageNavigation";

function Navbar() {
  return (
    <>
      {/* <div className="flex gap-4 w-[100%] py-6 px-6 font-semibold  items-center"> */}
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
      {/* </div> */}
      <Outlet />
    </>
  );
}

export default Navbar;

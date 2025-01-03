import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";


function App() {
  return (
    <div className="max-w-screen min-h-screen mx-auto bg-black overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pointtable" element={<PointsTable/>}/>
          <Route path="/news" element={<h1>Comming soon.....</h1>}/>
          <Route path="matchdetail/:id" element={<MatchDetail />} />
        </Route>
      
      </Routes>
    </div>
  );
}
export default App;

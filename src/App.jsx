import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";
import Navbar from "./components/Navbar";
import PointsTable from "./components/PointsTable";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pointtable" element={<PointsTable/>}/>
          <Route path="/news" element={<h1>Comming soon.....</h1>}/>
         
        </Route>
        <Route path="matchdetail/:id" element={<MatchDetail />} />
      </Routes>
    </>
  );
}
export default App;

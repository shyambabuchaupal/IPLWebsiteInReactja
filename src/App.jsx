import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MatchDetail from "./components/MatchDetail";


function App() {
    return(
        <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="matchdetail/:id" element={<MatchDetail/>}/>
      </Routes>
        </>
    )
}
export default App;

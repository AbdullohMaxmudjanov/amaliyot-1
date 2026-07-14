import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./router/Home/Home";
import Ceramics from "./router/Ceramics/Ceramics";
import Tables from "./router/Tables/Tables";
import Chairs from "./router/Chairs/Chairs";
import Crockery from "./router/Crockery/Crockery";
import Tableware from "./router/Tableware/Tableware";
import Cutlery from "./router/Cutlery/Cutlery";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ceramics" element={<Ceramics />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/chairs" element={<Chairs />} />
        <Route path="/crockery" element={<Crockery />} />
        <Route path="/tableware" element={<Tableware />} />
        <Route path="/cutlery" element={<Cutlery />} />
      </Routes>
    </div>
  );
};
export default App;
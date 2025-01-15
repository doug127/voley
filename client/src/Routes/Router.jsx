import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Plantilla from "../pages/plantilla";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantilla" element={<Plantilla />} />
        <Route path="*" element={<h1>Página no Encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

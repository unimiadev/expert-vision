import "./App.css";
import Home from "./pages/home";
import "./styles/fonts.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projetos from "./pages/Projetos/Projetos";
import SobreNos from "./pages/SobreNos/SobreNos";
import Contato from "./pages/Contato/Contato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SalaSelector from "./pages/SalaSelector";
import SalaView from "./pages/SalaView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/salas" element={<SalaSelector />} />
        <Route path="/salas/:id" element={<SalaView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

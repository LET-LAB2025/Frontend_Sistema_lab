import { useNavigate } from "react-router-dom";
import "./SalaSelector.css";

function SalaSelector() {
  const navigate = useNavigate();

  return (
    <div className="selector-container">
      <h1>Selecione a Sala</h1>
      <button onClick={() => navigate("/salas/112")}>Sala 112</button>
      <button onClick={() => navigate("/salas/114")}>Sala 114</button>
    </div>
  );
}

export default SalaSelector;

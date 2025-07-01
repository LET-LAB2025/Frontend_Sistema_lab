import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PCBox from "../components/PCBox";
import "./SalaView.css";

function SalaView() {
  const { id } = useParams();
  const [pcs, setPcs] = useState([]);

  useEffect(() => {
    const temp = [];
    ["ESQUERDA", "DIREITA"].forEach((coluna) => {
      for (let mesa = 1; mesa <= 6; mesa++) {
        for (let posicao = 1; posicao <= 5; posicao++) {
          temp.push({
            id: `${coluna}-${mesa}-${posicao}`,
            coluna,
            mesa,
            posicao,
            patrimonio: `PAT-${coluna[0]}-${mesa}${posicao}-LAB${id}`,
            status: "FUNCIONAL",
          });
        }
      }
    });
    setPcs(temp);
  }, [id]);

  const handleClick = (pc) => {
    const novoStatus =
      pc.status === "FUNCIONAL"
        ? "DESATUALIZADO"
        : pc.status === "DESATUALIZADO"
        ? "DEFEITUOSO"
        : "FUNCIONAL";

    setPcs((prev) =>
      prev.map((p) => (p.id === pc.id ? { ...p, status: novoStatus } : p))
    );
  };

  const renderLinha = (mesa) => {
    const esquerda = pcs.filter((pc) => pc.coluna === "ESQUERDA" && pc.mesa === mesa);
    const direita = pcs.filter((pc) => pc.coluna === "DIREITA" && pc.mesa === mesa);

    return (
      <div key={mesa} className="linha">
        <div className="coluna-lado">
          {esquerda.map((pc) => (
            <PCBox
              key={pc.id}
              posicao={pc.posicao}
              status={pc.status}
              patrimonio={pc.patrimonio}
              onClick={() => handleClick(pc)}
            />
          ))}
        </div>
        <span className="separador">|</span>
        <div className="coluna-lado">
          {direita.map((pc) => (
            <PCBox
              key={pc.id}
              posicao={pc.posicao}
              status={pc.status}
              patrimonio={pc.patrimonio}
              onClick={() => handleClick(pc)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="sala-container">
      <h1>Sala {id}</h1>
      <div className="salas">
        {Array.from({ length: 6 }, (_, idx) => renderLinha(idx + 1))}
      </div>
    </div>
  );
}

export default SalaView;

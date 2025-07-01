import "./PCBox.css";

function PCBox({ status, posicao, patrimonio, onClick }) {
  let statusClass = "";
  if (status === "FUNCIONAL") statusClass = "functional";
  else if (status === "DESATUALIZADO") statusClass = "outdated";
  else if (status === "DEFEITUOSO") statusClass = "broken";

  return (
    <div
      onClick={onClick}
      className={`pc-box ${statusClass}`}
      title={`Patrimônio: ${patrimonio}`}
    >
      {posicao}
    </div>
  );
}

export default PCBox;

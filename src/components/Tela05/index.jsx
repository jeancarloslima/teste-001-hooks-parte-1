import { useState, useEffect } from "react";

export default function Tela05() {
  const [tempo, setTempo] = useState(0);
  const [contando, setContando] = useState(false);

  useEffect(() => {
    let intervalo;

    if (contando) {
      intervalo = setInterval(() => {
        setTempo((tempoAtual) => tempoAtual + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalo);
    };
  }, [contando]);

  function handleIniciar() {
    setContando(true);
  }

  function handlePausar() {
    setContando(false);
  }

  function handleZerar() {
    setContando(false);
    setTempo(0);
  }

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1 style={{fontSize: "48px", fontWeight: "bold", marginBottom: "50px"}}>{tempo}</h1>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
        <button style={{width: "150px", height: "40px", borderRadius: "16px", backgroundColor: "#06d834", color: "#FFF", border: "1px solid #06d834", outline: "none", cursor: "pointer"}} onClick={handleIniciar}>Iniciar</button>
        <button style={{width: "150px", height: "40px", borderRadius: "16px", backgroundColor: "#c2a500", color: "#FFF", border: "1px solid #c2a500", outline: "none", cursor: "pointer"}} onClick={handlePausar}>Pausar</button>
        <button style={{width: "150px", height: "40px", borderRadius: "16px", backgroundColor: "#d80606", color: "#FFF", border: "1px solid #d80606", outline: "none", cursor: "pointer"}} onClick={handleZerar}>Zerar</button>
      </div>
    </div>
  );
}

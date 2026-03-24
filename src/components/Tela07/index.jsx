import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Catalogo from "./Catalogo";
import { WatchlistContext } from "./WatchlistContext";

export default function Tela07() {
  const [filmesSalvos, setFilmesSalvos] = useState([]);

  function adicionarFilme(nomeFilme) {
    if (!filmesSalvos.includes(nomeFilme)) {
      setFilmesSalvos([...filmesSalvos, nomeFilme]);
    }
  }

  return (
    <WatchlistContext.Provider value={{ filmesSalvos, adicionarFilme }}>
      <Cabecalho />
      <Catalogo />
    </WatchlistContext.Provider>
  );
}

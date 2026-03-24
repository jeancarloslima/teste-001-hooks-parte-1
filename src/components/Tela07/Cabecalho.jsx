import { useContext } from "react";
import { WatchlistContext } from "./WatchlistContext";

export default function Cabecalho() {
  const { filmesSalvos } = useContext(WatchlistContext);

  return (
    <>
      <h1>Você tem {filmesSalvos.length} filmes na sua watchlist.</h1>
      {filmesSalvos.map((filme, index) => (
        <li key={index}>{filme}</li>
      ))}
    </>
  );
}

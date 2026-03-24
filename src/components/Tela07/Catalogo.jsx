import { useContext } from "react";
import { WatchlistContext } from "./WatchlistContext";

export default function Catalogo() {
    const { adicionarFilme } = useContext(WatchlistContext);

  return (
    <>
      <button onClick={() => adicionarFilme("Minari")}>Adicionar Minari</button>
      <button onClick={() => adicionarFilme("Whiplash")}>Adicionar Whiplash</button>
      <button onClick={() => adicionarFilme("Vingadores ")}>Adicionar Vingadores</button>
    </>
  );
}

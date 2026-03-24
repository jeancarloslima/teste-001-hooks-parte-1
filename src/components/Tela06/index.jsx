import { useContext } from "react";
import { ProjetoContext } from "../../App";

export default function Tela06() {
  const projetoAtivo = useContext(ProjetoContext);

  return (
    <>
      <h3>Teste de useContext</h3>
      <p>Nome do projeto: {projetoAtivo}</p>
    </>
  );
}

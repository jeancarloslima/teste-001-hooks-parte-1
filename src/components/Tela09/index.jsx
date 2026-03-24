import { useRef } from "react";

export default function Tela09() {
  const secaoComentariosRef = useRef(null);

  function irParaComentarios() {
    secaoComentariosRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <h1>Vingadores: Ultimato</h1>
      <button onClick={irParaComentarios}>Ler Comentários</button>

      <div style={{ height: "1500px" }}>Conteúdo do filme...</div>

      <div ref={secaoComentariosRef}>
        <h2>Comentários do filme</h2>
        <p>Filme épico!</p>
      </div>
    </>
  );
}

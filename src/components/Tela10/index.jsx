import { useRef, useState } from "react";

export default function Tela10() {
    const [nomeFilme, setNomeFilme] = useState('');

    const inputRef = useRef(null);

    function lidarComSalvamento() {
        if (nomeFilme.trim() === "") {
            inputRef.current.focus();
            return;
        }

        console.log("Filme salvo com sucesso!");
        
        setNomeFilme('');
        inputRef.current.focus();
    }

    return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
      <h2>Adicionar Novo Filme</h2>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <input 
          ref={inputRef} 
          value={nomeFilme} 
          onChange={(e) => setNomeFilme(e.target.value)} 
          type="text" 
          placeholder="Ex: Slumdog Millionaire" 
          style={{ flex: 1, padding: '8px' }}
        />
        
        <button onClick={lidarComSalvamento} style={{ padding: '8px 16px' }}>
          Salvar
        </button>
      </div>
    </div>
  );
}
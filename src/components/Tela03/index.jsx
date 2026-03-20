import { useState, useEffect } from "react"

export default function Tela03() {
    const [cliques, setCliques] = useState(0);

    useEffect(() => {
        document.title = `Você alterou ${cliques} vezes`;
    }, [cliques]);

    return (
        <div>
            <p>Você clicou {cliques} vezes</p>
            <button onClick={() => setCliques((cliquesAtual) => cliquesAtual + 1)}>
                Clique aqui!
            </button>
        </div>
    );
}
import { useState, useEffect } from "react";

export default function Tela04() {
    const [larguraJanela, setLarguraJanela] = useState(window.innerWidth);

    useEffect(() => {
        function handleRedimensionamento() {
            setLarguraJanela(window.innerWidth);
        }

        window.addEventListener("resize", handleRedimensionamento);

        return () => {
            window.removeEventListener("resize", handleRedimensionamento);
        }
    }, []);

    return (
        <div>
            <h3>A largura atual da tela é:</h3>
            <p><strong>{larguraJanela}px</strong></p>
            {larguraJanela < 768 ? <p>Modo Mobile</p> : <p>Modo Desktop</p>}
        </div>
    )
}
import { useState, useEffect } from "react";

export default function Tela02() {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo((tempoAtual) => tempoAtual + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };

    }, []);

    return <p>Tempo: {tempo} segundos</p>
}
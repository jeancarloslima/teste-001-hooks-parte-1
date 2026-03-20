import { useState, useEffect } from "react";

export default function Tela01({ userId }) {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function buscarDados() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
                const data = await response.json();

                setUsuario(data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };
        
        buscarDados();

    }, [userId]);

    if (!usuario) return <p>Carregando...</p>

    return (
        <>
        <h1>{usuario.name}</h1>
        <h2>{usuario.username}</h2>
        <h2>{usuario.email}</h2>
        <h2>{usuario.phone}</h2>
        </>
    )
}
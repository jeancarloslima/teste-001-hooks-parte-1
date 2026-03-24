import { useRef } from "react";

export default function Tela08() {
    const inputRef = useRef(null);

    function focarNoCampo() {
        inputRef.current.focus();
    }

    return (
    <>
        <input ref={inputRef} type="text" placeholder="Digite seu nome..." />
        <button onClick={focarNoCampo}>Focar no Input</button>
    </>
    )
}
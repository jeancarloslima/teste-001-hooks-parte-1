import { createContext } from "react";
import "./App.css";
import Tela01 from "./components/Tela01";
import Tela02 from "./components/Tela02";
import Tela03 from "./components/Tela03";
import Tela04 from "./components/Tela04";
import Tela05 from "./components/Tela05";
import Tela07 from "./components/Tela07";
import Tela08 from "./components/Tela08";
import Tela09 from "./components/Tela09";

export const ProjetoContext = createContext();

function App() {
  const projetoAtual = "Oscar's Odyssey";

  return (
    <ProjetoContext.Provider value={projetoAtual}>
      {/* <Tela01 userId="3" />
      <Tela02 />
      <Tela03 />
      <Tela04 /> 
      <Tela05 />
      <Tela06 />
      <Tela07 />
      <Tela08 />*/}
      <Tela09 />
    </ProjetoContext.Provider>
  );
}

export default App;

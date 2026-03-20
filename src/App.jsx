import "./App.css";
import Tela01 from "./components/Tela01";
import Tela02 from "./components/Tela02";
import Tela03 from "./components/Tela03";
import Tela04 from "./components/Tela04";

function App() {
  return (
    <>
      <Tela01 userId="3" />
      <Tela02 />
      <Tela03 />
      <Tela04 />
    </>
  );
}

export default App;

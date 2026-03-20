import "./App.css";
import Tela01 from "./components/Tela01";
import Tela02 from "./components/Tela02";
import Tela03 from "./components/Tela03";

function App() {
  return (
    <>
      <Tela01 userId="3" />
      <Tela02 />
      <Tela03/>
    </>
  );
}

export default App;

import Calculator from "./components/Calculator/Calculator";
import "./App.scss";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <main className={"main theme-" + theme}>
      <Calculator />
    </main>
  );
}

export default App;

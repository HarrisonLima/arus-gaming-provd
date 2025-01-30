import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import './i18n'; // Import the i18n configuration

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;

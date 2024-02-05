import Home from "./pages/Home";
import AppRoutes from '../src/routes/routes.jsx';
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <AppRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;

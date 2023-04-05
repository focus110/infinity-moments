import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partner from "./pages/Partner";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Partner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

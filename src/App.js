import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partner from "./pages/Partner";
import "./App.css";
import PageSettings from "./pages/PageSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Partner />} />
        <Route path="/page-settings" element={<PageSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

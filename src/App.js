import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partner from "./pages/Partner";
import "./App.css";
import PageSettings from "./pages/PageSettings";
import InvitePartner from "./pages/InvitePartner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Partner />} />
        <Route path="/page-settings" element={<PageSettings />} />
        <Route path="/invite-partner" element={<InvitePartner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

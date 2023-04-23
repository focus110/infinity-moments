import { BrowserRouter, Route, Routes } from "react-router-dom";
import Partner from "./pages/Partner";
import "./App.css";
import PageSettings from "./pages/PageSettings";
import InvitePartner from "./pages/InvitePartner";
import { useState } from "react";
import Profile from "./pages/Profile";

function App() {
  const [overlay, setOverlay] = useState(false);

  const isOverlayOpen = () => {
    setOverlay(!overlay);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Partner overlay={overlay} isOverlayOpen={isOverlayOpen} />}
        />
        <Route path="/page-settings" element={<PageSettings />} />
        <Route
          path="/profile"
          element={<Profile overlay={overlay} isOverlayOpen={isOverlayOpen} />}
        />
        <Route
          path="/invite-partner"
          element={
            <InvitePartner overlay={overlay} isOverlayOpen={isOverlayOpen} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

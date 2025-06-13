// client/src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Router } from "wouter"; // ✅ import Router dari wouter

createRoot(document.getElementById("root")!).render(
  <Router base="/portofolio"> {/* ✅ Tambahkan ini */}
    <App />
  </Router>
);

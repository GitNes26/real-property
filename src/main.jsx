import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      {/* <App /> */}
      <DetailsPage />
   </StrictMode>,
);

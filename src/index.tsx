import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPageNew } from "./screens/LandingPageNew";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPageNew />
  </StrictMode>
);

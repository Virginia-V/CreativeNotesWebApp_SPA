import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "../src/styles/globals.css";
import Auth0ProviderWithNavigate from "./providers/Auth0ProviderWithNavigate";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);

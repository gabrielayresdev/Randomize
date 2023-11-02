import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.sass";
import FlashcardsContextProvider from "./contexts/FlashcardsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FlashcardsContextProvider>
      <App />
    </FlashcardsContextProvider>
  </React.StrictMode>
);

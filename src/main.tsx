import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "flowbite";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux-Cart/index.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

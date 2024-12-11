import React from "react"

import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import { Router, Route,  } from 'react-router'

import { store } from "./app/store"
import App from "./App"
import "./index.css"
import {MainPage} from "./pages/main-page";
import {LobbyPage} from "./pages/lobby-page";

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/lobby" element={<LobbyPage />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}

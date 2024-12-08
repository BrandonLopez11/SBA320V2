import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import Details from "./pages/Details";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

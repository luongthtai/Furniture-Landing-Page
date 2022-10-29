import React from "react";
import { Route, Routes } from "react-router-dom";
import { routers } from "./routers/index.js";

export default function App() {
  return (
    <>
      <Routes>
        {routers.map((item) => (
          <Route key={item.id} path={item.path} element={item.component} />
        ))}
      </Routes>
    </>
  );
}

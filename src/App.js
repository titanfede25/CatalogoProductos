import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Productos from "./pages/Productos";
import Layout from "./pages/Layout";
import Resultado from "./pages/Resultado";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Producto/:id" element={<Producto />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Resultado/:categoria" element={<Resultado />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}
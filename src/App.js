import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Productos from "./pages/Productos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Producto/:id" element={<Producto />} />
          <Route path="/Productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
}
import React from "react";
import { useParams } from "react-router-dom";
import productos from "../productos.json";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí

export default function Producto() {
  const { id } = useParams();
  const producto = productos.find((p) => p.id === parseInt(id));

  if (producto) {
    return (
      <div className="product-details">
        <img src={producto.image} alt={producto.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{`Nombre: ${producto.name}`}</h1>
          <p className="product-description">{`Descripción: ${producto.descripcion}`}</p>
          <p className="product-category">{`Categoría: ${producto.categoria}`}</p>
        </div>
      </div>
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
}

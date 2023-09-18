import React from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import productos from "../productos.json";

const Productos = () => {

  return (
    <div className="home-container">
      <h1>Seleccion de auriculares</h1>
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product"><Link to={`/Producto/${product.id}`}>
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">Precio: ${product.price}</p>
          </Link></div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
import React from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import productos from "../productos.json";

const Productos = () => {

  return (
    <div className="home-container">
      <div className='TituloProducto'>
        <br></br>
      <h1>Nuestra seleccion de auriculares</h1>
      <br></br>
      </div>
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image2" />
            <br></br><br></br>
            <div className='Link'><Link to={`/Producto/${product.id}`}><button><p className="product-name">{product.name}</p></button></Link></div>
            <p className="product-price">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
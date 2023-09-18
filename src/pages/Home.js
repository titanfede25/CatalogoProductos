import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import productos from "../productos.json";

const Home = () => {

  return (
    <div className="home-container">
      <h1>Bienvenido a Nuestro E-commerce de auriculares</h1>
      <Link to={`/Productos`}><h1>Ir a productos</h1></Link>
      
      
      <Carousel className="product-carousel">
        {productos.slice(0, 3).map((product) => (
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
        ))}
      </Carousel>

      
      <div className="product-list">
        {productos.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">Precio: ${product.price}</p></div>
        ))}
      </div>
    </div>
  );
};

export default Home;
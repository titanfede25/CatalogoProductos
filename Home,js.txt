import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import productos from "../productos.json";

const Home = () => {

  return (
    
    <div className="home-container">
      
      <div className="Titulo">
      <br></br>
      <br></br>  
      <h1>Bienvenido a Nuestro E-commerce de auriculares</h1>
      <br></br><br></br>
      
      
     
      </div>
      <div className='Link'>
      <br></br>
      
      <Link to={`/Productos`}><button><h1>Ir a productos</h1></button></Link>
      
      <br></br><br></br><br></br>
      </div>
      <Carousel className="product-carousel">
        {productos.slice(0, 3).map((product) => (
          <div className='fondocarrusel'>
          <div key={product.id} className="product-slide">
            <img src={product.image} alt={product.name} className="product-image" />
          </div>
          </div>
        ))}
      </Carousel>
      <div className='Titulo'>
        <br></br>
      <h1>Productos Recomendados por la comunidad</h1>
      <br></br>
      </div>
      <div className="product-list">
        
        {productos.map((product) => (
          
          <div key={product.id} className="product">
            <br></br><br></br><br></br>
            <img src={product.image} alt={product.name} className="product-imagePreview" />
            <p className="product-name">{product.name}</p>
            <p className="product-price"><b>Precio: ${product.price}</b></p></div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Home;
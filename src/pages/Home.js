import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; 
//import productos from "../productos.json";
import axios from 'axios'


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((response)=> {
      console.log(response.data.products);
      setProducts(response.data.products);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  return (
    
    <div className="home-container">
      
     
      <div className='Link'>
      <br></br>
      
      <Link to={`/Productos`}><button><h1>Ir a productos</h1></button></Link>
      
      <br></br><br></br><br></br>
      </div>
      <Carousel className="product-carousel">
        {products.map((product) => (
          <div className='fondocarrusel'>
          <div key={product.id} className="product-slide">
            <img src={product.images[0]} alt={product.title} className="product-image" />
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
        
        {products.map((product) => (
          
          <div key={product.id} className="product">
            <br></br><br></br><br></br>
            <img src={product.images[0]} alt={product.title} className="product-imagePreview" />
            <p className="product-name">{product.title}</p>
            <p className="product-price"><b>Precio: ${product.price}</b></p></div>
        ))}
      </div>
      
    </div>
    
  );
};

export default Home;

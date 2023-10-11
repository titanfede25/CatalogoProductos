import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
//import productos from "../productos.json";
import axios from 'axios'

const Productos = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then((response)=> {
      setProducts(response.data.products);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <br></br>
            <img src={product.images[0]} alt={product.title} className="product-image2" />
            <br></br><br></br>
            <div className='Link'><Link to={`/Producto/${product.id}`}><button><p className="product-name">{product.title}</p></button></Link></div>
            <p className="product-price">Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;

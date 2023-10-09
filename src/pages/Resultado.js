import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; 
//import productos from "../productos.json";
import axios from 'axios'

const Resultado = () => {
  const [products, setProducts] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    axios.get('https://dummyjson.com/products/category/' + categoria)
      .then((response)=> {
        setProducts(response.data.products);
      })
      .catch((error)=> {
        console.log(error);
      });
  }, [categoria]);

  return (
    <div className="home-container">
      <div className='TituloProducto'>
      <br></br>
      <br></br>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
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

export default Resultado;

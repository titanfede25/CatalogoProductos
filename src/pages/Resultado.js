import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Home.css'; 
//import productos from "../productos.json";
import axios from 'axios'

const Resultado = () => {
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
      
      
    </div>
    
  );
};

export default Resultado;

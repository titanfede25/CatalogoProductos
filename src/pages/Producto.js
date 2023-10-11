import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import '../Home.css';
import { useContextState } from "../ContextState.js";

export default function Producto() {
  const { id } = useParams();
  const [producto, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { contextState, setContextState } = useContextState();
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
    .then((response)=> {
      setProduct(response.data);
      console.log(response.data); // Verifica el objeto del producto
    })
    .catch((error)=> {
      console.log(error);
      setError(error);
    })}, [])

  if (error) {
    return <div>Ocurrió un error al obtener los datos del producto: {error.message}</div>;
  } else if (producto) {
    return (
        
          
      <div className="product-details">
        
      <br></br><br></br><br></br><br></br>
        {producto.images && producto.images[0] ? <img src={producto.images[0]} alt={producto.title}/> : <p>No se encontró la imagen del producto</p>}
        <div className="product-info">
          <h1 className="product-name2">{`${producto.title}`}</h1>
          <p className="product-description">{`Descripción: ${producto.description}`}</p>
          <p className="product-category">{`Categoría: ${producto.category}`}</p>
          
          <div className="Centrar">
          <Link to={`/Productos`} onClick={()=>{setContextState({ newValue: producto, type: "SET_PRODUCTOS" })}}><div className="botonproducto"><button>Agregar</button></div></Link>
          
          </div>
          
        </div>
        <div className="Link">
          
        </div>
        <br></br><br></br><br></br><br></br>
        </div>
        
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
}
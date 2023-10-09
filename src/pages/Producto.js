import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
//import productos from "../productos.json";
import axios from 'axios'
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import { useContextState } from "../ContextState.js";

export default function Producto() {
  const { id } = useParams();
  const [producto, setProduct] = useState([]);
  const { contextState, setContextState } = useContextState();
  
  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
    .then((response)=> {
      setProduct(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  if (producto) {
    return (
      <div className="product-details">
        <br></br>
        <img src={producto.images[0]} alt={producto.title} className="product-imageDetalles" />
        <div className="product-info">
          <h1 className="product-name">{`Nombre: ${producto.title}`}</h1>
          <p className="product-description">{`Descripción: ${producto.description}`}</p>
          <p className="product-category">{`Categoría: ${producto.category}`}</p>
          <Link to={`/Productos`} onClick={()=>{setContextState({ newValue: producto, type: "SET_PRODUCTOS" })}}>Agregar</Link>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    );
  } else {
    return <div>Producto no encontrado</div>;
  }
}

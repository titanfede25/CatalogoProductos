import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import productos from "../productos.json";
import axios from 'axios'
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí

export default function Producto() {
  const { id } = useParams();
  const [producto, setProduct] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products/' + id)
    .then((response)=> {
      console.log(response.data);
      setProduct(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })}, [])

  if (producto) {
    return (
      <div className="product-details">
        <br></br>
        {/*<img src={producto.images[0]} alt={producto.title} className="product-imageDetalles" />*/}
        <div className="product-info">
          <h1 className="product-name">{`Nombre: ${producto.title}`}</h1>
          <p className="product-description">{`Descripción: ${producto.description}`}</p>
          <p className="product-category">{`Categoría: ${producto.category}`}</p>
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

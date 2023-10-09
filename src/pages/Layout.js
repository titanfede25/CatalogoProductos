import React,{useState, useEffect} from "react";
import { Outlet, Link} from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import { useContextState } from "../ContextState.js";

export default function Layout() {
    const [category, setCategory]=useState(false);
    const { contextState, setContextState } = useContextState();

    return (
    <div className="">
        <input id="." type="text" placeholder="Ingrese aquí la categoría que quieres buscar" onChange={()=>{setCategory(document.getElementById(".").value)}}></input>
        <Link to={`/Resultado/${category}`}>Buscar categoria</Link>
        <p>Productos seleccionados:</p>
        {console.log(contextState.productos)}
        {contextState?.productos.map((producto)=>{
            return(
                <div className="">
                    <p>{producto.title}</p>
                </div>
            )
        })}
        <Outlet />
    </div>
    );
}




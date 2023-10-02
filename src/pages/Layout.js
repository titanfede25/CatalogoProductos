import React,{/*useState, useEffect*/} from "react";
import { Outlet, Link} from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import { useContextState } from "../ContextState.js";

export default function Layout() {
    const { contextState, setContextState } = useContextState();
    //useEffect(() => {console.log(category)}, [category])
    return (
    <div className="">
        <input id="." type="text" placeholder="Ingrese aquí la categoría que quieres buscar" onChange={()=>{setContextState({ newValue: document.getElementById(".").value, type: "SET_CATEGORIA" }); }}></input>
        <Link to={`/Resultado`}>Buscar categoria</Link>
        <Outlet />
    </div>
    );
}




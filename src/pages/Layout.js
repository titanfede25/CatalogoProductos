import React,{useState, useEffect} from "react";
import { Outlet, Link} from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí

export default function Layout() {
    const [category, setCategory]=useState(false);
    useEffect(() => {console.log(category)}, [category])
    return (
    <div className="">
        <input id="." type="text" placeholder="Ingrese aquí la categoría que quieres buscar" onChange={()=>{setCategory(document.getElementById(".").value)}}></input>
        <Link to="/stats">Buscar</Link>
        <Outlet />
    </div>
    );
}

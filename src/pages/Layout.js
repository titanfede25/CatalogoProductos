import React,{useState, useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí

export default function Layout() {
    const [category, setCategory]=useState(false);
    return (
    <div className="">
        {/*<input type="text"></input>
        <Link to="/stats">Stats</Link>*/}
        <Outlet />
    </div>
    );
}

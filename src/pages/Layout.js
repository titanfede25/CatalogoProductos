import React,{useState, useEffect} from "react";
import { Outlet, Link} from "react-router-dom";
import '../Home.css'; // Asegúrate de importar tu archivo de estilos CSS personalizado aquí
import { useContextState } from "../ContextState.js";

export default function Layout() {
    const [category, setCategory]=useState(false);
    const { contextState, setContextState } = useContextState();

    return (
    <div className="">
        <div className="Row">
            <br></br><br></br><br></br>
            <input id="." type="text" placeholder="Ingrese aquí la categoría que quieres buscar" onChange={()=>{setCategory(document.getElementById(".").value)}}></input>
            <Link to={`/Resultado/${category}`}> <button>Buscar categoria</button></Link>
        </div>
        <div className="Row">
            <div className="CategoriasRecomendadas">
            <p>Categorias Recomendadas:</p>
            </div>
            <Link to={`/Resultado/${"skincare"}`}><button>skincare</button></Link>
            <Link to={`/Resultado/${"laptops"}`}><button>laptops</button></Link>
            <Link to={`/Resultado/${"smartphones"}`}><button>smartphones</button></Link>
            <Link to={`/Resultado/${"fragrances"}`}><button>fragrances</button></Link>
            <Link to={`/Resultado/${"groceries"}`}><button>groceries</button></Link>
            <Link to={`/Resultado/${"home-decoration"}`}><button>home-decoration</button></Link>
        </div>
        
        {/* NO FUNCIONA EL CONTEXT STATE
        <p>Productos seleccionados:</p>
        {console.log(contextState.productos)}
        {contextState?.productos.map((producto)=>{
            return(
                <div className="">
                    <p>{producto.title}</p>
                </div>
            )
        })}*/}
        <Outlet />
    </div>
    );
}
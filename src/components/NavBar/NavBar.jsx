import CartWidget from "../CartWidget/CartWidget";
import estilos from "./NavBar.module.css";
import imgLogo from "../assets/img/favicon1.png";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
    <div className={estilos.containerNavbar}>
    <Link to="/">
    <img src={imgLogo} alt="Logo de la Empresa" />
    </Link>
      

      <ul className={estilos.listaNavbar}>
        <Link to="/">Productos</Link>
        <Link to="/category/capilares" >Capilares</Link>
        <Link to="/category/corporales">Corporales</Link>
        <Link to="/category/faciales">Faciales</Link>
        
      </ul>

      <CartWidget/>
    </div>
    <Outlet/>
    </div>
  );
};

export default NavBar



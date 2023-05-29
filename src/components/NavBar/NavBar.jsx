import CartWidget from "../CartWidget/CartWidget";
import estilos from "./NavBar.module.css";
import imgLogo from "../assets/img/favicon1.png";
import { Outlet, Link } from "react-router-dom";

import { db } from "../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  console.log(categories);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });

        setCategories(categoriesResult);
      })

      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className={estilos.containerNavbar}>
        <Link to="/">
          <img src={imgLogo} alt="Logo de la Empresa" /></Link>
        <ul className={estilos.listaNavbar}>
          {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </ul>

        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;

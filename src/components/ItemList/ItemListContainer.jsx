import { useState, useEffect } from "react";
import ItemList from "./ItemList";

import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log("categoryName:", categoryName);

  useEffect(() => {
    let consulta;
    const itemCollection = collection(db, "products");

    if (categoryName) {
      const itemsCollectionFiltered = query(
        itemCollection,
        where("category", "==", categoryName)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemCollection;

     // console.log("categoryName:", categoryName); // Agregado console.log
     // console.log("consulta:", consulta); // Agregado console.log
    }

    getDocs(consulta)
      .then((res) => {
        const product = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });

       // console.log(product); // Agregar este console.log

        setItems(product);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MoonLoader color="green" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
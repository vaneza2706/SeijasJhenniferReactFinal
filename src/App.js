import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import CartContainer from "./components/Cart/CartContainer";
import NavBar from "./components/NavBar/NavBar";
import Formulario from "./components/Formulario/Formulario";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";



function App() {return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />}/>
            <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/checkout" element={<FormCheckoutContainer />} />
            <Route path="*" element={<h1>La ruta no existe</h1>} />
          </Route>
        </Routes>
        </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartProvider from "./context/CartProvider.jsx"
import Carrito from './components/Cart/Carrito.jsx';
import Checkout from './components/Checkout/Checkout.jsx';
function App() {


  return (
    <>
      <CartProvider>
        <NavBar />


        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App

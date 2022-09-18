// import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactPage } from "./components/ContactPage/ContactPage";
import { AboutPage } from "./components/AboutPage/AboutPage";
import { Filterbar } from "./components/Filterbar/Filterbar";
import { CartProvider } from "./context/CartContext";
import { CartContainer } from "./components/CartContainer/CartContainer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Filterbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product" element={<ItemListContainer />} />
            <Route path="/product/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId/" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

// import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContactPage } from "./components/ContactPage/ContactPage";
import { AboutPage } from "./components/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/Product/" element={<ItemListContainer />} />
          <Route path="/Product/:categoryId" element={<ItemListContainer />} />
          <Route path="/Item/:itemId/" element={<ItemDetailContainer/>} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/About" element={<AboutPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { IntemDetailContainer } from "./components/ItemDetailContainer/IntemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hello world!" />
      <IntemDetailContainer />
    </div>
  );
}

export default App;

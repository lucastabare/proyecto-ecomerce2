import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Products from "./Components/ProductList/Product.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Products />
    </div>
  );
}

export default App;

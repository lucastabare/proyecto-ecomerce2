import "./App.css";
import CheckPage from "./Components/CheckPage/CheckPage";
import NavBar from "./Components/NavBar/NavBar";
//import Products from "./Components/Product/Product.js";
//import ProductList from "./Components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CheckPage />
      {/* <ProductList /> */}
      {/* <Products /> */}
    </div>
  );
}

export default App;

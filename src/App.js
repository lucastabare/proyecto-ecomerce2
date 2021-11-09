import "./App.css";
import CheckPage from "./Components/CheckPage/CheckPage";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import {Router, Switch, Route } from "react-router";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/carrito" exact component={CheckPage} />
            <Route path="/" exact component={ProductList} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

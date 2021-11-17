import "./App.css";
import CheckPage from "./Components/CheckPage/CheckPage";
import NavBar from "./Components/NavBar/NavBar";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SingIn from "./Components/SingIn/SingIn";
import SingUp from "./Components/SingUp/SingUp";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/carrito" exact component={CheckPage} />
            <Route path="/" exact component={ProductList} />
            <Route path="/singin" exact component={SingIn} />
            <Route path="/singup" exact component={SingUp} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

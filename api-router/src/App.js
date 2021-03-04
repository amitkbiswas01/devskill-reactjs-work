import { Route, Switch, Redirect } from "react-router-dom";

import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";
import ProductCreate from "./components/ProductCreate";
import Navigation from "./components/Navigation";
import NotFound from "./components/404";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/products">
          <Homepage />
        </Route>
        <Route exact path="/products/create">
          <ProductCreate />
        </Route>
        <Route exact path="/products/update/:id">
          <ProductCreate />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";

import ProductContextProvider from "./contexts/ProductContext/ProductContext";

const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/add" component={AddCard} />
                    <Route exact path="/list" component={ProductList} />
                    <Route exact path="/main" component={ProductCard} />
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;

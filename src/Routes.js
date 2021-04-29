import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";

import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import CardDetails from "./components/CardDetails/CardDetails";

const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/add" component={AddCard} />
                    <Route exact path="/list" component={ProductList} />
                    <Route exact path="/details/:id" component={CardDetails} />
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;

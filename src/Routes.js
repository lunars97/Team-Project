import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";

import ProductContextProvider from "./contexts/ProductContext/ProductContext";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Home from "./components/Home/Home";



const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"    component={Home} />
                    <Route exact path="/container" component={Container} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/add" component={AddCard} />
                    <Route exact path="/list" component={ProductList} />
                    <Route exact path="/main" component={ProductCard} />
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;
